/* Lifestyle AI layer
 * Two providers behind one interface (sampleNS(input, opts) and sampleNS.json(prompt, opts)):
 *  - "local": an LLM that runs on this device with WebGPU (WebLLM). Works offline once the model is downloaded.
 *  - "claude": Anthropic API with the user's own key. Needs internet; best quality, reads photos.
 */
const AI_MODELS = {
  'Qwen3-1.7B-q4f16_1-MLC':            { name: 'Srednji · Qwen3 1.7B', mem: '≈ 2 GB memorije', dl: 'preuzimanje ≈ 1 GB', note: 'Preporučeno za mobitel', qwen3: true },
  'Llama-3.2-1B-Instruct-q4f16_1-MLC': { name: 'Mali · Llama 3.2 1B',  mem: '≈ 0,9 GB memorije', dl: 'preuzimanje ≈ 0,7 GB', note: 'Najbrži, za starije mobitele; slabiji hrvatski' },
  'Qwen3-4B-q4f16_1-MLC':              { name: 'Veliki · Qwen3 4B',    mem: '≈ 3,4 GB memorije', dl: 'preuzimanje ≈ 2,3 GB', note: 'Najpametniji; iPhone Pro, iPad ili računalo', qwen3: true },
  'Phi-3.5-vision-instruct-q4f16_1-MLC': { name: 'S vidom · Phi-3.5 Vision', mem: '≈ 4 GB memorije', dl: 'preuzimanje ≈ 2,4 GB', note: 'Čita slike bez interneta; samo jači iPad ili računalo', vision: true }
};
const CLAUDE_MODELS = {
  'claude-sonnet-5-5': 'Sonnet 5.5 (preporučeno)',
  'claude-haiku-5-5': 'Haiku 5.5 (najbrži, najjeftiniji)',
  'claude-opus-5-5': 'Opus 5.5 (najjači, najskuplji)'
};

const AI = {
  cfg: { mode: 'auto', claudeModel: 'claude-sonnet-5-5', localModel: 'Qwen3-1.7B-q4f16_1-MLC' },
  key: '',
  lib: null, engine: null, engineModel: null, loading: null,
  progress: null,            // {p: 0..1, text}
  cached: {},                // modelId -> true once downloaded here
  gpu: null,                 // null unknown, true/false
  listeners: new Set(),
  emit() { this.listeners.forEach(f => { try { f() } catch (e) {} }) }
};

(function loadAIConfig() {
  try { Object.assign(AI.cfg, JSON.parse(localStorage.getItem('lifestyle.ai') || '{}')) } catch (e) {}
  try { AI.key = localStorage.getItem('lifestyle.key') || '' } catch (e) {}
  try { AI.cached = JSON.parse(localStorage.getItem('lifestyle.llm.cached') || '{}') } catch (e) {}
})();
function saveAIConfig() {
  try { localStorage.setItem('lifestyle.ai', JSON.stringify(AI.cfg)) } catch (e) {}
  try { AI.key ? localStorage.setItem('lifestyle.key', AI.key) : localStorage.removeItem('lifestyle.key') } catch (e) {}
  try { localStorage.setItem('lifestyle.llm.cached', JSON.stringify(AI.cached)) } catch (e) {}
  AI.emit();
}

AI.checkGPU = async function () {
  if (AI.gpu !== null) return AI.gpu;
  try { AI.gpu = !!(navigator.gpu && await navigator.gpu.requestAdapter()) } catch (e) { AI.gpu = false }
  return AI.gpu;
};
AI.provider = function () {
  const online = navigator.onLine !== false;
  const hasLocal = !!(AI.engine || AI.cached[AI.cfg.localModel]);
  switch (AI.cfg.mode) {
    case 'off': return null;
    case 'claude': return AI.key && online ? 'claude' : null;
    case 'local': return hasLocal ? 'local' : null;
    default: return AI.key && online ? 'claude' : hasLocal ? 'local' : null;
  }
};
AI.vision = function () {
  const p = AI.provider();
  return p === 'claude' || (p === 'local' && !!AI_MODELS[AI.cfg.localModel]?.vision);
};
AI.label = function () {
  const p = AI.provider();
  if (p === 'claude') return 'Claude · ' + (CLAUDE_MODELS[AI.cfg.claudeModel] || AI.cfg.claudeModel).split(' (')[0];
  if (p === 'local') return 'Na uređaju · ' + (AI_MODELS[AI.cfg.localModel]?.name.split(' · ')[1] || AI.cfg.localModel);
  return 'Isključen';
};

/* ---------- local model (WebLLM in a worker) ---------- */
AI.loadLocal = async function (modelId = AI.cfg.localModel) {
  if (AI.engine && AI.engineModel === modelId) return AI.engine;
  if (AI.loading) return AI.loading;
  AI.loading = (async () => {
    if (!(await AI.checkGPU())) throw { code: 'no_webgpu', message: 'Ovaj preglednik nema WebGPU.' };
    AI.progress = { p: 0, text: 'Pokrećem…' }; AI.emit();
    AI.lib = AI.lib || await import('./vendor/web-llm.js');
    if (AI.engine) { try { await AI.engine.unload() } catch (e) {} AI.engine = null }
    const onProgress = r => { AI.progress = { p: r.progress || 0, text: r.text || '' }; AI.emit() };
    let engine;
    try {
      const worker = new Worker(new URL('./llm-worker.js', location.href), { type: 'module' });
      engine = await AI.lib.CreateWebWorkerMLCEngine(worker, modelId, { initProgressCallback: onProgress });
    } catch (e) {
      if (String(e?.message || e).match(/fetch|network|Failed to fetch|NetworkError/i) && navigator.onLine === false)
        throw { code: 'offline_model', message: 'Model još nije preuzet, a nema interneta.' };
      // Some browsers refuse module workers; fall back to the main thread.
      engine = await AI.lib.CreateMLCEngine(modelId, { initProgressCallback: onProgress });
    }
    AI.engine = engine; AI.engineModel = modelId; AI.cached[modelId] = true; AI.progress = null;
    saveAIConfig();
    return engine;
  })();
  try { return await AI.loading } catch (e) { AI.progress = null; AI.emit(); throw normErr(e) } finally { AI.loading = null }
};
AI.deleteLocal = async function (modelId) {
  try {
    AI.lib = AI.lib || await import('./vendor/web-llm.js');
    if (AI.engineModel === modelId && AI.engine) { await AI.engine.unload(); AI.engine = null; AI.engineModel = null }
    await AI.lib.deleteModelAllInfoInCache(modelId);
  } catch (e) {}
  delete AI.cached[modelId]; saveAIConfig();
};
AI.storage = async function () {
  try { const e = await navigator.storage.estimate(); return { used: e.usage || 0, quota: e.quota || 0 } } catch (e) { return null }
};

function normErr(e) {
  if (e && e.code) return e;
  const m = String(e?.message || e || '');
  if (/WebGPU|adapter|GPU/i.test(m)) return { code: 'no_webgpu', message: m };
  if (/memory|OOM|allocation|Device lost|DXGI|out of/i.test(m)) return { code: 'no_memory', message: m };
  if (/Failed to fetch|NetworkError|network/i.test(m)) return { code: navigator.onLine === false ? 'offline' : 'network', message: m };
  return { code: 'error', message: m };
}

async function blobToDataURL(b) { return await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(b) }) }

const SYS = 'Ti si stručni, topao i konkretan asistent za trening, prehranu i zdrave navike u osobnoj aplikaciji "Lifestyle". Uvijek odgovaraš na hrvatskom jeziku (standardni hrvatski, ne srpski). Ne postavljaš dijagnoze; za ozbiljne simptome upućuješ liječniku.';

function toMessages(input) {
  if (typeof input === 'string') return [{ role: 'user', content: input }];
  return input.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content) }));
}
function stripThink(t) { return String(t || '').replace(/<think>[\s\S]*?(<\/think>|$)/g, '').trim() }

async function localGenerate(messages, opts = {}) {
  const engine = await AI.loadLocal();
  const meta = AI_MODELS[AI.cfg.localModel] || {};
  let msgs = [{ role: 'system', content: SYS }, ...messages];
  if (opts.images?.length && meta.vision) {
    const last = msgs[msgs.length - 1];
    const parts = [{ type: 'text', text: last.content }];
    for (const b of [].concat(opts.images).slice(0, 1)) parts.push({ type: 'image_url', image_url: { url: await blobToDataURL(b) } });
    msgs[msgs.length - 1] = { role: 'user', content: parts };
    msgs = msgs.filter(m => m.role !== 'system'); // vision models here dislike system prompts with images
  } else if (opts.images?.length) {
    throw { code: 'images_unavailable', message: 'Odabrani model na uređaju ne čita slike.' };
  }
  const req = {
    messages: msgs, stream: true, stream_options: { include_usage: false },
    temperature: opts.json ? 0.3 : 0.7, max_tokens: opts.maxTokens || (opts.json ? 1400 : 650)
  };
  if (meta.qwen3) req.extra_body = { enable_thinking: false };
  if (opts.json && !meta.vision) req.response_format = { type: 'json_object' };
  let text = '';
  const run = async r => {
    const chunks = await engine.chat.completions.create(r);
    for await (const c of chunks) {
      const d = c.choices?.[0]?.delta?.content || '';
      if (d) { text += d; opts.onText?.({ text: stripThink(text), delta: d }) }
      if (opts.signal?.aborted) { try { engine.interruptGenerate() } catch (e) {} break }
    }
  };
  try { await run(req) }
  catch (e) {
    if (req.response_format) { delete req.response_format; text = ''; await run(req) } else throw normErr(e);
  }
  return stripThink(text);
}

async function claudeRequest(body) {
  let r;
  try {
    r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 'x-api-key': AI.key,
        'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({ model: AI.cfg.claudeModel, max_tokens: 2000, system: SYS, ...body })
    });
  } catch (e) { throw { code: navigator.onLine === false ? 'offline' : 'network', message: String(e?.message || e) } }
  if (!r.ok) {
    let msg = ''; try { msg = (await r.json())?.error?.message || '' } catch (e) {}
    const code = r.status === 401 ? 'bad_key' : r.status === 403 ? 'forbidden' : r.status === 429 ? 'rate_limited' : r.status === 400 && /credit|balance/i.test(msg) ? 'no_credit' : r.status >= 500 ? 'overloaded' : 'api_error';
    throw { code, message: msg || ('HTTP ' + r.status) };
  }
  return r.json();
}
async function claudeGenerate(messages, opts = {}) {
  const msgs = messages.map(m => ({ role: m.role, content: m.content }));
  if (opts.images?.length) {
    const last = msgs[msgs.length - 1];
    const blocks = [];
    for (const b of [].concat(opts.images).slice(0, 4)) {
      const url = await blobToDataURL(b); const [, mt, data] = url.match(/^data:([^;]+);base64,(.*)$/) || [];
      if (data) blocks.push({ type: 'image', source: { type: 'base64', media_type: mt || 'image/jpeg', data } });
    }
    blocks.push({ type: 'text', text: last.content });
    msgs[msgs.length - 1] = { role: 'user', content: blocks };
  }
  const tools = (opts.tools || []).map(t => ({ name: t.name, description: t.description, input_schema: t.inputSchema || { type: 'object', properties: {} } }));
  const sys = opts.json ? SYS + ' Odgovaraš isključivo jednim valjanim JSON objektom, bez ikakvog teksta prije ili poslije i bez ``` oznaka.' : SYS;
  let finalText = '';
  for (let round = 0; round < 6; round++) {
    const res = await claudeRequest({ messages: msgs, system: sys, max_tokens: opts.maxTokens || (opts.json ? 4000 : 1200), ...(tools.length ? { tools } : {}) });
    const textNow = (res.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    finalText = textNow || finalText;
    if (res.stop_reason !== 'tool_use') break;
    msgs.push({ role: 'assistant', content: res.content });
    const results = [];
    for (const b of res.content.filter(b => b.type === 'tool_use')) {
      const t = (opts.tools || []).find(x => x.name === b.name);
      let out, isErr = false;
      try { out = t ? await t.execute(b.input || {}) : { error: 'nepoznat alat' } } catch (e) { out = { error: String(e?.message || e) }; isErr = true }
      results.push({ type: 'tool_result', tool_use_id: b.id, content: JSON.stringify(out ?? { ok: true }), ...(isErr ? { is_error: true } : {}) });
    }
    msgs.push({ role: 'user', content: results });
  }
  opts.onText?.({ text: finalText, delta: finalText });
  return finalText;
}

function parseJSONLoose(t) {
  t = String(t || '').replace(/```(?:json)?/g, '');
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b < a) throw { code: 'invalid_json', message: 'Model nije vratio podatke u ispravnom obliku.' };
  const s = t.slice(a, b + 1);
  try { return JSON.parse(s) } catch (e) {
    try { return JSON.parse(s.replace(/,\s*([}\]])/g, '$1').replace(/[“”]/g, '"')) }
    catch (e2) { throw { code: 'invalid_json', message: 'Model nije vratio podatke u ispravnom obliku. Pokušaj ponovno.' } }
  }
}

/* The one interface the app uses */
const sampleNS = async function (input, opts = {}) {
  const p = AI.provider();
  if (!p) throw { code: 'unavailable' };
  let messages = toMessages(input);
  if (p === 'local') {
    if (messages.length > 7) messages = messages.slice(-7);
    while (messages.length && messages[0].role !== 'user') messages.shift();
    if (opts.tools && opts.localIntents) {
      const done = await opts.localIntents();
      if (done.length) messages[messages.length - 1].content += `\n[Aplikacija je upravo izvršila: ${done.join('; ')}. Potvrdi to kratko.]`;
    }
    return { text: await localGenerate(messages, opts), truncated: false, provider: 'local' };
  }
  return { text: await claudeGenerate(messages, opts), truncated: false, provider: 'claude' };
};
sampleNS.json = async function (prompt, opts = {}) {
  const r = await sampleNS(prompt, { ...opts, json: true, tools: undefined });
  try { return parseJSONLoose(r.text) }
  catch (e) {
    if (AI.provider() !== 'local') throw e;
    const r2 = await sampleNS(prompt + '\nVAŽNO: vrati SAMO JSON objekt, ništa drugo.', { ...opts, json: true, tools: undefined });
    return parseJSONLoose(r2.text);
  }
};
sampleNS.limits = async () => ({ images: AI.vision() ? { maxCount: 4 } : undefined });

AI.test = async function () {
  const t0 = performance.now();
  const r = await sampleNS('Odgovori jednom kratkom rečenicom: koji je dobar izvor proteina za doručak?', { maxTokens: 60 });
  return { text: r.text, ms: Math.round(performance.now() - t0), provider: r.provider };
};

window.addEventListener('online', () => AI.emit());
window.addEventListener('offline', () => AI.emit());
