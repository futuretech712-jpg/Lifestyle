
/* ---------- icons ---------- */
const I={
 home:'<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
 dumb:'<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',
 plate:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
 cart:'<path d="M3 4h2l2.4 11h10.2L20 8H6.2"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>',
 spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
 bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
 fork:'<path d="M7 3v8a2 2 0 0 0 2 2v8M11 3v8M7 7h4M17 3c-2 2-2 6 0 8v10"/>',
 chart:'<path d="M4 20h16M6 16l4-5 3 3 5-7"/>',
 cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
 check:'<path d="M5 12l5 5 9-10"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 trash:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',
 refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 pin:'<path d="M12 21s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
 fridge:'<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 10h12M9 6v2M9 13v3"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 pill:'<rect x="3" y="9" width="18" height="7" rx="3.5" transform="rotate(-35 12 12.5)"/><path d="M10 8.5l4.5 6.5"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/>',
 doc:'<path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h4"/>',
 code:'<path d="M4 6v12M7 6v12M10 6v12M14 6v12M16 6v12M20 6v12"/>',
 pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
 plane:'<path d="M10.5 13.5L4 11l1-2 7.5 1L17 5.5a2 2 0 0 1 3 3L15.5 13l1 7.5-2 1-2.5-6.5L9 18v3l-1.5.5L6 18l-3-1.5L3.5 15H6.5z"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
 bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>'
};
const ic=(n,w=2)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=s=>document.querySelector(s);
const r0=n=>Math.round(+n||0), r1=n=>Math.round((+n||0)*10)/10;
const dk=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const uid=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
const DAYS=['nedjelja','ponedjeljak','utorak','srijeda','četvrtak','petak','subota'];
const MONTHS=['siječnja','veljače','ožujka','travnja','svibnja','lipnja','srpnja','kolovoza','rujna','listopada','studenoga','prosinca'];

/* ---------- nutrients ---------- */
const MICROS=[
 {k:'fiber',n:'Vlakna',u:'g',m:30,f:28,foods:'zobene pahuljice, grah, leća, chia, kruške, brokula'},
 {k:'vitC',n:'Vitamin C',u:'mg',m:90,f:75,foods:'crvena paprika, kivi, brokula, naranča, jagode'},
 {k:'vitD',n:'Vitamin D',u:'µg',m:15,f:15,foods:'losos, skuša, jaja, sunce; zimi razmisli o D3 suplementu'},
 {k:'b12',n:'Vitamin B12',u:'µg',m:2.4,f:2.4,foods:'govedina, jaja, mlijeko, tuna, skyr'},
 {k:'iron',n:'Željezo',u:'mg',m:8,f:18,foods:'crvena govedina, leća, špinat (uz vitamin C), bučine sjemenke'},
 {k:'calcium',n:'Kalcij',u:'mg',m:1000,f:1000,foods:'grčki jogurt, sir, sardine s kostima, tofu, mlijeko'},
 {k:'magnesium',n:'Magnezij',u:'mg',m:400,f:310,foods:'bučine sjemenke, bademi, tamna čokolada, crni grah'},
 {k:'potassium',n:'Kalij',u:'mg',m:3400,f:2600,foods:'krumpir, banana, grah, avokado, jogurt'},
 {k:'zinc',n:'Cink',u:'mg',m:11,f:8,foods:'govedina, bučine sjemenke, slanutak, jaja'},
 {k:'omega3',n:'Omega-3',u:'g',m:1.6,f:1.1,foods:'losos, skuša, sardine, orasi, lan'}
];
const ACT={1.2:'Sjedilački',1.375:'Lagano aktivan',1.55:'Umjereno aktivan',1.725:'Vrlo aktivan'};
const GOALS={cut:'Mršavljenje',keep:'Održavanje',bulk:'Mišićna masa'};
const GYMS={none:'Nemam gym',home:'Kućna oprema',basic:'Osnovni gym',full:'Puni gym'};
const EQUIP={db:'Bučice',band:'Elastične gume',bar:'Šipka za zgibove',kb:'Kettlebell',bench:'Klupa',cardio:'Traka / bicikl'};

/* ---------- state ---------- */
const DEFAULTS={
 profile:{name:'',sex:'m',age:30,height:180,weight:80,activity:1.55,goal:'keep',proteinPerKg:2.0,
   gym:'none',equip:[],level:'mid',minutes:45,location:'Zagreb',budget:60,cook:true,mealsPerDay:3,diet:'',example:true},
 water:{},done:{},ex:{},workoutAI:{},mealplan:null,restaurants:null,weights:[],chat:[],
 reminders:[
  {id:'r1',time:'08:00',text:'Doručak s barem 30 g proteina',on:true},
  {id:'r2',time:'10:30',text:'Popij čašu vode',on:true},
  {id:'r3',time:'13:00',text:'Ručak: pola tanjura povrća, četvrtina proteina',on:true},
  {id:'r4',time:'15:30',text:'Voda + proteinski međuobrok',on:true},
  {id:'r5',time:'18:00',text:'Današnji trening',on:true},
  {id:'r6',time:'21:00',text:'Pogledaj što ti danas fali od nutrijenata',on:true}
 ],
 fridge:{mood:'tired',energy:2,minutes:15,items:['jaja','sir','paprika','skyr','banana','tortilja'],result:null},
 sleep:{},health:{},
 supps:[
  {id:'s1',name:'Vitamin D3',dose:'25 µg (1000 IU)',time:'09:00',micros:{vitD:25}},
  {id:'s2',name:'Omega-3',dose:'1 g EPA+DHA',time:'09:00',micros:{omega3:1}},
  {id:'s3',name:'Kreatin',dose:'5 g',time:'09:00',micros:{}}
 ],
 suppTaken:{},lifts:{},products:{},report:null,
 status:{},
 demoCleared:false
};
let S=structuredClone(DEFAULTS);
let MEALS=[];
let sampleReady=false, sampleImages=false;

function demoMeals(){
 const d=dk();
 return [
  {id:'demo1',date:d,time:'08:10',name:'Zobena kaša s grčkim jogurtom i borovnicama',kcal:420,p:28,c:55,f:10,demo:true,
   micros:{fiber:7,vitC:6,vitD:0.2,b12:0.9,iron:2.4,calcium:260,magnesium:110,potassium:520,zinc:2.2,omega3:0.1}},
  {id:'demo2',date:d,time:'13:20',name:'Piletina, riža i brokula',kcal:610,p:48,c:68,f:14,demo:true,
   micros:{fiber:5,vitC:80,vitD:0.1,b12:0.4,iron:2.1,calcium:90,magnesium:80,potassium:780,zinc:2.6,omega3:0.1}}
 ];
}
function mergeDefaults(d){
 const o=structuredClone(DEFAULTS);
 for(const k in d){ if(k==='profile') o.profile={...o.profile,...d.profile}; else o[k]=d[k]; }
 return o;
}
/* ---------- storage: IndexedDB on this device ---------- */
const DB={
 db:null,
 open(){ if(this.db) return Promise.resolve(this.db); return new Promise((res,rej)=>{ const r=indexedDB.open('lifestyle',1); r.onupgradeneeded=()=>r.result.createObjectStore('kv'); r.onsuccess=()=>{this.db=r.result;res(this.db)}; r.onerror=()=>rej(r.error) }) },
 async get(k){ const db=await this.open(); return new Promise((res,rej)=>{ const q=db.transaction('kv').objectStore('kv').get(k); q.onsuccess=()=>res(q.result); q.onerror=()=>rej(q.error) }) },
 async set(k,v){ const db=await this.open(); return new Promise((res,rej)=>{ const t=db.transaction('kv','readwrite'); t.objectStore('kv').put(v,k); t.oncomplete=()=>res(); t.onerror=()=>rej(t.error) }) }
};
let storageOK=true;
async function loadLocal(){
 try{
  const st=await DB.get('state'), m=await DB.get('meals');
  if(st){ S=mergeDefaults(st); MEALS=m||[]; return true }
  const raw=localStorage.getItem('lifestyle.v1'); // older single-file version
  if(raw){ const j=JSON.parse(raw); S=mergeDefaults(j.s||{}); MEALS=j.m||[]; await saveNow(); return true }
 }catch(e){ storageOK=false; console.warn('storage',e) }
 return false;
}
async function saveNow(){
 saveTimer=null;
 try{ await DB.set('state',JSON.parse(JSON.stringify({...S,chat:S.chat.slice(-60)}))); await DB.set('meals',JSON.parse(JSON.stringify(MEALS))); storageOK=true }
 catch(e){ storageOK=false; console.warn('save',e); toast('Spremanje nije uspjelo. Oslobodi malo prostora na uređaju.') }
}
let saveTimer=null;
function save(){ clearTimeout(saveTimer); saveTimer=setTimeout(saveNow,250) }
window.addEventListener('pagehide',()=>{ if(saveTimer){clearTimeout(saveTimer);saveNow()} });
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden'&&saveTimer){clearTimeout(saveTimer);saveNow()} });
function saveLocal(){ save() }
async function saveMeal(m){ save() }
async function deleteMeal(id){ MEALS=MEALS.filter(x=>x.id!==id); save() }
function refreshAI(){ sampleReady=!!AI.provider(); sampleImages=AI.vision(); }

/* ---------- calculations ---------- */
function targets(){
 const p=S.profile;
 const bmr=10*p.weight+6.25*p.height-5*p.age+(p.sex==='m'?5:-161);
 let kcal=bmr*(+p.activity);
 const st=activeStatus();
 if(p.goal==='cut'&&!st.sick) kcal-=450; if(p.goal==='bulk'&&!st.sick) kcal+=300;
 if(st.sick&&st.sick.type!=='zeludac') kcal+=100;
 kcal+=activityBonus();
 kcal=Math.round(kcal/10)*10;
 const prot=Math.round(p.weight*(+p.proteinPerKg||2));
 const fat=Math.round(kcal*0.27/9);
 const carb=Math.max(80,Math.round((kcal-prot*4-fat*9)/4));
 const micros={}; MICROS.forEach(m=>micros[m.k]=p.sex==='m'?m.m:m.f);
 let water=Math.round(p.weight*35/250);
 if(st.sick) water+=4; if(st.flight&&st.flight.date===dk()) water+=Math.ceil(+st.flight.hours||2); if(st.stress) micros.magnesium=Math.round(micros.magnesium*1.1);
 if(st.sick) { micros.vitC=Math.max(micros.vitC,200); micros.zinc=Math.round(micros.zinc*1.3); }
 return {kcal,p:prot,c:carb,f:fat,micros,water};
}
function mealsOn(d=dk()){ return MEALS.filter(m=>m.date===d).sort((a,b)=>(a.time||'').localeCompare(b.time||'')) }
function totals(d=dk()){
 const t={kcal:0,p:0,c:0,f:0,micros:{}}; MICROS.forEach(m=>t.micros[m.k]=0);
 mealsOn(d).forEach(m=>{t.kcal+=+m.kcal||0;t.p+=+m.p||0;t.c+=+m.c||0;t.f+=+m.f||0;MICROS.forEach(x=>t.micros[x.k]+=+(m.micros?.[x.k])||0)});
 (S.supps||[]).forEach(s=>{ if(S.suppTaken?.[d]?.[s.id]){ t.kcal+=+s.kcal||0; t.p+=+s.p||0; MICROS.forEach(x=>t.micros[x.k]+=+(s.micros?.[x.k])||0) } });
 return t;
}
function gaps(){
 const T=targets(), t=totals(); const out=[];
 const hour=new Date().getHours(); const dayFrac=Math.min(1,Math.max(.25,(hour-6)/15));
 if(t.p<T.p) out.push({n:'Proteini',left:`${r0(T.p-t.p)} g`,pct:t.p/T.p,foods:'piletina, skyr, jaja, tuna, grčki jogurt, posni sir, proteinski shake',prio:2});
 MICROS.forEach(m=>{const pct=t.micros[m.k]/T.micros[m.k]; if(pct<dayFrac*0.8) out.push({n:m.n,left:`${r1(T.micros[m.k]-t.micros[m.k])} ${m.u}`,pct,foods:m.foods,prio:1})});
 return out.sort((a,b)=>b.prio-a.prio||a.pct-b.pct);
}

/* ---------- workout generator ---------- */
const EX=[
 // name, focus, equipment tags (any), reps, alt
 ['Sklekovi','push',['bw'],'8–15','na koljenima ako je teško'],
 ['Pike sklekovi','push',['bw'],'6–10','sklekovi s nogama na stolici'],
 ['Dipsevi na stolici','push',['bw'],'10–15','uske sklekove'],
 ['Dijamantni sklekovi','push',['bw'],'6–12','obični sklekovi'],
 ['Potisak bučicama s poda','push',['db'],'10–12','sklekovi'],
 ['Arnold press','push',['db'],'10–12','pike sklekovi'],
 ['Potisak s klupe','push',['gym'],'6–10','potisak bučicama'],
 ['Military press','push',['gym'],'6–10','Arnold press'],
 ['Triceps na sajli','push',['cable'],'12–15','dipsevi'],
 ['Kosi potisak bučicama','push',['gym','bench'],'8–12','sklekovi s nogama gore'],
 ['Inverted row ispod stola','pull',['bw'],'8–12','veslanje ručnikom na vratima'],
 ['Superman','pull',['bw'],'12–15','Y-T-W na podu'],
 ['Veslanje ručnikom (vrata)','pull',['bw'],'10–15','superman'],
 ['Veslanje bučicom','pull',['db'],'10–12','inverted row'],
 ['Biceps pregib','pull',['db','band'],'10–15','pregib s ruksakom'],
 ['Band pull-apart','pull',['band'],'15–20','Y-T-W na podu'],
 ['Zgibovi','pull',['bar'],'4–10','negativni zgibovi'],
 ['Lat pulldown','pull',['gym'],'8–12','zgibovi s gumom'],
 ['Veslanje na sajli','pull',['cable','gym'],'10–12','veslanje bučicom'],
 ['Face pull','pull',['cable','band'],'15','band pull-apart'],
 ['Čučanj','legs',['bw'],'15–20','čučanj do stolice'],
 ['Bugarski čučanj','legs',['bw','db'],'8–12 / noga','iskorak'],
 ['Iskoraci u hodu','legs',['bw','db'],'10 / noga','statični iskorak'],
 ['Glute bridge','legs',['bw'],'15–20','hip thrust s kauča'],
 ['Jednonožni RDL','legs',['bw','db'],'10 / noga','good morning'],
 ['Goblet čučanj','legs',['db','kb'],'10–15','čučanj'],
 ['Čučanj sa šipkom','legs',['gym'],'5–8','leg press'],
 ['Mrtvo dizanje','legs',['gym'],'5','RDL bučicama'],
 ['Leg press','legs',['gym'],'10–12','goblet čučanj'],
 ['Hip thrust','legs',['gym','bench'],'8–12','glute bridge'],
 ['Kettlebell swing','legs',['kb'],'15–20','glute bridge s pauzom'],
 ['Plank','core',['bw'],'40 s','plank na koljenima'],
 ['Dead bug','core',['bw'],'10 / strana','plank'],
 ['Bočni plank','core',['bw'],'30 s / strana','bočni plank na koljenu'],
 ['Visovi s podizanjem nogu','core',['bar'],'8–12','podizanje nogu na podu'],
 ['Mountain climbers','cardio',['bw'],'40 s','marširanje na mjestu'],
 ['Burpees','cardio',['bw'],'10','squat thrust bez skoka'],
 ['High knees','cardio',['bw'],'40 s','brzi hod na mjestu'],
 ['Penjanje stepenicama','cardio',['bw'],'5 min','step-up na stepenicu'],
 ['Intervali na traci/biciklu','cardio',['cardio'],'8 × 30 s','brzi hod uzbrdo'],
 ['Skakanje bez užeta','cardio',['bw'],'60 s','jumping jacks']
];
const SPLIT={1:['push','core'],2:['legs','core'],3:['cardio','core'],4:['pull','core'],5:['full'],6:['cardio'],0:['mobility']};
const SPLITNAME={1:'Gornji dio — potisak',2:'Noge i stražnjica',3:'Kondicija i core',4:'Gornji dio — povlačenje',5:'Cijelo tijelo',6:'Aktivni dan',0:'Odmor i mobilnost'};
function availableTags(){
 const p=S.profile, t=new Set(['bw']);
 if(p.gym==='home') p.equip.forEach(e=>t.add(e));
 if(p.gym==='basic'||p.gym==='full'){['db','bench','bar','gym','cardio','band'].forEach(x=>t.add(x)); if(p.gym==='full'){t.add('cable');t.add('kb')}}
 return t;
}
function seeded(seed){let s=seed%2147483647;if(s<=0)s+=2147483646;return()=>(s=s*16807%2147483647)/2147483647}
function genWorkout(dateStr=dk()){
 const d=new Date(dateStr+'T12:00:00'), wd=d.getDay(), p=S.profile, tags=availableTags();
 const rnd=seeded(+dateStr.replace(/-/g,''));
 const sets=p.level==='beg'?2:p.level==='adv'?4:3;
 const n=Math.max(3,Math.min(7,Math.round(p.minutes/9)));
 const ok=e=>e[2].some(t=>tags.has(t));
 const score=e=>(e[2].includes('bw')&&tags.size>1?0:1)+rnd(); // prefer equipment when available
 const pick=(focus,k)=>EX.filter(e=>e[1]===focus&&ok(e)).map(e=>[score(e),e]).sort((a,b)=>b[0]-a[0]).slice(0,k).map(x=>x[1]);
 let list=[], focus=SPLIT[wd];
 if(wd===0){
  return {title:SPLITNAME[0],focus:'Oporavak',minutes:20,warmup:['5 min laganog hoda'],exercises:[
   {name:'Mačka-krava',sets:2,reps:'10',rest:'—',tip:'polako, s disanjem'},
   {name:'Otvaranje kukova (90/90)',sets:2,reps:'8 / strana',rest:'—',tip:'drži leđa uspravno'},
   {name:'Istezanje prsa na vratima',sets:2,reps:'30 s',rest:'—',tip:'bez boli'},
   {name:'Šetnja 30–45 min',sets:1,reps:'lagano',rest:'—',tip:'cilj ~8000 koraka'}],
   cooldown:['Duboko disanje 2 min'],note:'Danas oporavak. Proteine drži visoko i da se naspavaš.',source:'auto'};
 }
 if(focus[0]==='full') list=[...pick('legs',2),...pick('push',1),...pick('pull',1),...pick('core',1),...pick('cardio',1)];
 else if(focus[0]==='cardio'&&wd===6) list=[...pick('cardio',3),...pick('legs',1),...pick('core',1)];
 else { const main=focus[0]; list=[...pick(main,n-1),...pick(focus[1]||'core',main==='cardio'?2:1)]; }
 list=list.slice(0,n);
 const rest=p.goal==='cut'||focus[0]==='cardio'?'30–45 s':'60–90 s';
 const noGym=p.gym==='none';
 return {title:SPLITNAME[wd],focus:noGym?'Bez opreme — održavanje forme':GYMS[p.gym],minutes:p.minutes,
  warmup:['3 min skakanje/hod na mjestu','10 kruženja ramenima i kukovima','10 čučnjeva bez težine'],
  exercises:list.map(e=>({name:e[0],sets:focus[0]==='cardio'?Math.max(2,sets-1):sets,reps:e[3],rest,tip:'',alt:e[4]})),
  cooldown:['Istezanje 5 min: prsa, kukovi, stražnja loža'],
  note:noGym?'Nemaš gym? Napravi ovo kao krug: sve vježbe redom, pa ponovi. Dodaj 20–30 min brzog hoda za održavanje.':'Ostavi 1–2 ponavljanja u rezervi. Idući tjedan dodaj težinu ili ponavljanje.',source:'auto'};
}
function workoutToday(){ const d=dk(); return adaptWorkout(S.workoutAI[d]||genWorkout(d)) }

/* ---------- AI ---------- */
function ctxBlock(){
 const p=S.profile,T=targets(),t=totals(),w=workoutToday();
 return `PROFIL: ${p.name||'korisnik'}, ${p.sex==='m'?'muško':'žensko'}, ${p.age} god, ${p.height} cm, ${p.weight} kg, aktivnost ${ACT[p.activity]}, cilj ${GOALS[p.goal]}, prehrana: ${p.diet||'bez ograničenja'}.
TRENING: ${GYMS[p.gym]}${p.gym==='home'?' ('+p.equip.map(e=>EQUIP[e]).join(', ')+')':''}, razina ${p.level}, ${p.minutes} min.
LOKACIJA: ${p.location}; budžet hrane ${p.budget} €/tjedan; kuha: ${p.cook?'da':'ne'}.
CILJEVI DANAS: ${T.kcal} kcal, P ${T.p} g, U ${T.c} g, M ${T.f} g, voda ${T.water} čaša.
POJEDENO DANAS: ${r0(t.kcal)} kcal, P ${r0(t.p)} g, U ${r0(t.c)} g, M ${r0(t.f)} g. Obroci: ${mealsOn().map(m=>m.name+' ('+r0(m.kcal)+' kcal)').join('; ')||'nema'}.
MIKRO (pojedeno/cilj): ${MICROS.map(m=>`${m.n} ${r1(t.micros[m.k])}/${T.micros[m.k]}${m.u}`).join(', ')}.
VODA: ${S.water[dk()]||0}/${T.water} čaša.
STANJE: ${statusSummary()||'normalno'}.
DANAŠNJI TRENING: ${w.title} — ${w.exercises.map(e=>e.name).join(', ')}. Odrađen: ${S.done[dk()]?'da':'ne'}.
MEAL PLAN: ${S.mealplan?.summary||'nije napravljen'}.
AKTIVNOST (Health): ${healthLine()}.
SAN: ${(()=>{const z=S.sleep[dk()];return z?z.hours+' h'+(z.q?', kvaliteta '+z.q+'/5':''):'nije upisan'})()}; prosjek 7 dana ${sleepAvg()||'—'} h.
SUPLEMENTI: ${S.supps.map(s=>s.name+(S.suppTaken[dk()]?.[s.id]?' ✓':' ✗')).join(', ')||'nema'}.
SNAGA (zadnje): ${Object.entries(S.lifts).slice(0,8).map(([k,v])=>{const l=v[v.length-1];return k+' '+(l.kg?l.kg+' kg × ':'')+l.reps}).join('; ')||'nema zapisa'}.
DATUM: ${DAYS[new Date().getDay()]}, ${dk()}, ${new Date().toTimeString().slice(0,5)}.`;
}
async function aiJSON(prompt,opts={}){
 refreshAI(); if(!sampleReady) throw {code:'unavailable'};
 aiBusy(true); try{ return await sampleNS.json(prompt,{...opts,onText:({text})=>aiProgress(text)}) } finally { aiBusy(false) }
}
let aiBusyN=0;
function aiBusy(on){ aiBusyN=Math.max(0,aiBusyN+(on?1:-1)); const el=$('#aibar'); if(!el) return; el.hidden=aiBusyN<=0; if(on) el.querySelector('span').textContent=AI.provider()==='local'?'AI na uređaju razmišlja…':'Claude razmišlja…' }
function aiProgress(text){ const el=$('#aibar span'); if(el&&AI.provider()==='local') el.textContent=`AI na uređaju piše… ${text.length} znakova` }
function aiErr(e){
 const c=e?.code;
 if(c==='unavailable') return navigator.onLine===false&&AI.key?'Nema interneta, a AI model na uređaju još nije preuzet. Preuzmi ga u Postavkama dok si online.':'AI još nije uključen. Otvori Postavke → AI i preuzmi model na uređaj ili upiši Claude API ključ.';
 if(c==='rate_limited') return 'Previše zahtjeva zaredom. Pričekaj minutu pa pokušaj ponovno.';
 if(c==='bad_key') return 'Claude API ključ nije ispravan. Provjeri ga u Postavkama.';
 if(c==='no_credit') return 'Na Claude API računu nema kredita. Nadoplati ga na console.anthropic.com ili koristi AI na uređaju.';
 if(c==='forbidden') return 'Claude API je odbio zahtjev. Provjeri ključ i dozvole na console.anthropic.com.';
 if(c==='overloaded') return 'Claude je trenutno preopterećen. Pokušaj za minutu.';
 if(c==='offline'||c==='network') return 'Nema veze s internetom. Za rad bez interneta preuzmi AI model na uređaj u Postavkama.';
 if(c==='offline_model') return 'Model još nije preuzet, a nema interneta. Preuzmi ga kad budeš online.';
 if(c==='no_webgpu') return 'Ovaj preglednik ne podržava AI na uređaju (WebGPU). Na iPhoneu treba iOS 26 ili noviji; na Androidu noviji Chrome.';
 if(c==='no_memory') return 'Uređaju nije dovoljno memorije za ovaj model. U Postavkama odaberi manji model.';
 if(c==='images_unavailable') return 'Odabrani AI ne čita slike. Bez interneta opiši obrok riječima ili ga upiši ručno; slike čita Claude (online) ili model "S vidom".';
 if(c==='invalid_json') return 'AI je vratio neispravan odgovor. Pokušaj ponovno'+(AI.provider()==='local'?' ili odaberi veći model.':'.');
 return 'AI nije uspio odgovoriti. Pokušaj ponovno.'+(e?.message?' ('+e.message+')':'');
}

/* ---------- toast / nav ---------- */
let toastT;
function toast(msg){ let el=$('#toast'); if(!el){el=document.createElement('div');el.id='toast';el.className='toast';el.setAttribute('role','status');document.body.appendChild(el)} el.textContent=msg; el.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>el.hidden=true,2800) }
const ROUTES={
 postavke:{n:'Postavke',i:'gear',d:'AI, kalendar, kopije'},
 povezivanje:{n:'Povezivanje',i:'link',d:'Apple Health, Google Fit, Garmin…'},
 stanje:{n:'Stanje',i:'pulse',d:'Stres, bolest, put, let, jetlag'},
 danas:{n:'Danas',i:'home',d:'Pregled dana'},
 trening:{n:'Trening',i:'dumb',d:'Dnevna preporuka'},
 hrana:{n:'Hrana',i:'plate',d:'Slikaj i prati obroke'},
 plan:{n:'Meal prep',i:'cart',d:'Kupnja po budžetu'},
 restorani:{n:'Restorani',i:'fork',d:'Kad ne možeš kuhati'},
 hladnjak:{n:'Što kuhati?',i:'fridge',d:'Po raspoloženju, energiji i hladnjaku'},
 asistent:{n:'Asistent',i:'spark',d:'Pitaj bilo što'},
 san:{n:'San',i:'moon',d:'Koliko i kako spavaš'},
 suplementi:{n:'Suplementi',i:'pill',d:'Dnevna kvačica'},
 snaga:{n:'Snaga',i:'trophy',d:'Napredak po vježbama'},
 izvjestaj:{n:'Tjedni izvještaj',i:'doc',d:'Kako je prošao tjedan'},
 nutrijenti:{n:'Nutrijenti',i:'bulb',d:'Što ti fali i što dodati'},
 napredak:{n:'Napredak',i:'chart',d:'Težina i tjedan'},
 podsjetnici:{n:'Podsjetnici',i:'bell',d:'Voda, obroci, trening'},
 profil:{n:'Profil',i:'user',d:'Podaci i ciljevi'}
};
const TABS=['danas','trening','asistent','hrana','plan'];
let route=(location.hash||'').slice(1); if(!ROUTES[route]) route='danas';
try{ if(!location.hash){const r=localStorage.getItem('lifestyle.route'); if(ROUTES[r]) route=r;} }catch(e){}
function go(r){ route=r; try{localStorage.setItem('lifestyle.route',r)}catch(e){} document.documentElement.classList.remove('menu-open'); render(); window.scrollTo(0,0) }

function renderChrome(){
 const now=new Date();
 $('#topdate').textContent=`${DAYS[now.getDay()]}, ${now.getDate()}. ${MONTHS[now.getMonth()]}`;
 $('#tabs').innerHTML=TABS.map(k=>k==='asistent'
  ?`<button class="tab ai ${route===k?'on':''}" data-go="${k}" aria-label="Asistent"><span class="bub">${ic('spark')}</span>AI</button>`
  :`<button class="tab ${route===k?'on':''}" data-go="${k}">${ic(ROUTES[k].i)}${ROUTES[k].n}</button>`).join('');
 const grp=(t,keys)=>`<div class="eyebrow group">${t}</div>`+keys.map(k=>`<button class="mitem ${route===k?'on':''}" data-go="${k}">${ic(ROUTES[k].i)}<span>${ROUTES[k].n}<small>${ROUTES[k].d}</small></span></button>`).join('');
 $('#drawer').innerHTML=`<div class="brand">lifestyle<i></i></div><p class="small muted">Trening, prehrana i navike na jednom mjestu.</p>`+
  grp('Svaki dan',['stanje','danas','trening','hrana','hladnjak','nutrijenti','suplementi','san'])+grp('Planiranje',['plan','restorani','podsjetnici'])+grp('Ti',['asistent','snaga','napredak','izvjestaj','povezivanje','profil','postavke'])+
  `<p class="small muted" style="margin-top:auto;padding-top:16px">Podaci su samo na ovom uređaju. AI: ${esc(AI.label())}</p>`;
 const isChat=route==='asistent';
 $('#composer').hidden=!isChat; document.documentElement.classList.toggle('has-composer',isChat);
}

/* ---------- views ---------- */
function bar(val,max,color){const w=Math.max(0,Math.min(100,val/max*100));return `<div class="bar" style="color:${color}"><i style="width:${w}%"></i></div>`}
function macroRow(n,v,t,col,u='g'){return `<div class="mrow"><div class="top"><span>${n}</span><span>${r0(v)} / ${t} ${u}</span></div>${bar(v,t,col)}</div>`}
function ringSVG(v1,t1,v2,t2){
 const c1=2*Math.PI*56, c2=2*Math.PI*43;
 const a=Math.min(1,v1/t1), b=Math.min(1,v2/t2);
 return `<svg viewBox="0 0 132 132"><circle cx="66" cy="66" r="56" fill="none" stroke="var(--surface-2)" stroke-width="11"/><circle cx="66" cy="66" r="56" fill="none" stroke="var(--accent)" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c1*a} ${c1}"/>
 <circle cx="66" cy="66" r="43" fill="none" stroke="var(--surface-2)" stroke-width="9"/><circle cx="66" cy="66" r="43" fill="none" stroke="var(--prot)" stroke-width="9" stroke-linecap="round" stroke-dasharray="${c2*b} ${c2}"/></svg>`;
}
function nextReminder(){
 const now=new Date().toTimeString().slice(0,5);
 const on=S.reminders.filter(r=>r.on).sort((a,b)=>a.time.localeCompare(b.time));
 return on.find(r=>r.time>now)||null;
}
function mealLi(m,del=true){
 return `<div class="li">${m.img?`<img class="thumb" src="${m.img}" alt="">`:`<div class="thumb">${ic('plate')}</div>`}
 <div class="grow"><div class="t">${esc(m.name)}</div><div class="small muted"><span class="num">${esc(m.time||'')}</span> · <span class="num">${r0(m.kcal)} kcal · P ${r0(m.p)} g</span>${m.demo?' · <span class="pill">primjer</span>':''}</div></div>
 ${del?`<button class="iconbtn" data-act="delmeal" data-id="${m.id}" aria-label="Obriši obrok">${ic('trash')}</button>`:''}</div>`;
}

function vDanas(){
 const T=targets(),t=totals(),w=workoutToday(),g=gaps().slice(0,3),nr=nextReminder(),water=S.water[dk()]||0;
 const left=T.kcal-t.kcal, hasDemo=MEALS.some(m=>m.demo);
 const greet=(()=>{const h=new Date().getHours();return h<11?'Dobro jutro':h<18?'Bok':'Dobra večer'})();
 return `
 ${S.profile.example?`<div class="banner">${ic('user')}<span>Ciljevi su izračunati za primjer profila. <b data-go="profil" style="cursor:pointer">Unesi svoje podatke</b></span></div>`:''}
 ${statusStrip()}
 <div><h1>${greet}${S.profile.name?', '+esc(S.profile.name):''}</h1><p class="muted">${left>0?`Ostalo ti je <b class="num">${r0(left)} kcal</b> i <b class="num">${r0(Math.max(0,T.p-t.p))} g proteina</b>.`:'Danas si dosegnuo kalorijski cilj.'}</p></div>
 <section class="card">
  <div class="ringwrap"><div class="ring">${ringSVG(t.kcal,T.kcal,t.p,T.p)}<div class="c"><b class="num">${r0(t.kcal)}</b><span class="small muted">od ${T.kcal} kcal</span></div></div>
  <div class="macros">${macroRow('Proteini',t.p,T.p,'var(--prot)')}${macroRow('Ugljikohidrati',t.c,T.c,'var(--carb)')}${macroRow('Masti',t.f,T.f,'var(--fat)')}</div></div>
  <div class="row"><button class="btn primary" data-act="photo">${ic('cam')}Slikaj obrok</button><button class="btn ghost" data-go="hrana">${ic('plus')}Upiši ručno</button></div>
 </section>
 ${hasDemo?`<div class="banner"><span>Prikazana su dva primjera obroka da vidiš kako izgleda.</span><button class="btn sm ghost" data-act="cleardemo" style="margin-left:auto">Obriši primjere</button></div>`:''}
 <section class="card" data-go="hladnjak" style="cursor:pointer"><div class="row"><div class="thumb" style="background:var(--accent-soft);color:var(--accent)">${ic('fridge')}</div><div class="grow"><h3>Ne znaš što kuhati?</h3><p class="small muted">Reci kako se osjećaš i što imaš u hladnjaku, dobit ćeš recept.</p></div></div></section>
 <section class="card hero">
  <div class="row between"><span class="eyebrow">Današnji trening</span><span class="pill ${S.done[dk()]?'good':'accent'}">${S.done[dk()]?'Odrađeno':w.minutes+' min'}</span></div>
  <h2>${esc(w.title)}</h2><p class="muted small">${esc(w.focus)} · ${w.exercises.length} vježbi</p>
  <button class="btn primary" data-go="trening">Otvori trening</button>
 </section>
 <section class="card">
  <div class="row between"><h3>Što ti još fali</h3><button class="btn sm ghost" data-go="nutrijenti">Svi nutrijenti</button></div>
  ${g.length?`<div>${g.map(x=>`<div class="gapitem"><div class="lbl">${x.n}<div class="small num" style="color:var(--accent)">−${x.left}</div></div><div class="food">${esc(x.foods)}</div></div>`).join('')}</div>`:`<p class="muted">Za sada si na dobrom putu. Nastavi ovako.</p>`}
 </section>
 <div class="mini">
  <section class="card" data-go="san"><span class="eyebrow">San sinoć</span><b class="num">${S.sleep[dk()]?S.sleep[dk()].hours+' h':'—'}</b><span class="small muted">${S.sleep[dk()]?(S.sleep[dk()].q?'kvaliteta '+S.sleep[dk()].q+'/5':'iz Healtha'):'Upiši san'}</span></section>
  <section class="card" data-go="suplementi"><span class="eyebrow">Suplementi</span><b class="num">${Object.values(S.suppTaken[dk()]||{}).filter(Boolean).length} / ${S.supps.length}</b><span class="small muted">uzeto danas</span></section>
  ${(()=>{const h=S.health[dk()]||{},yd=S.health[addDays(dk(),-1)]||{};return `<section class="card" data-go="${h.steps!=null?'napredak':'povezivanje'}"><span class="eyebrow">Koraci</span><b class="num">${h.steps!=null?r0(h.steps).toLocaleString('hr-HR'):'—'}</b><span class="small muted">${h.steps!=null?(h.activeKcal?r0(h.activeKcal)+' aktivnih kcal':'danas'):yd.steps!=null?'jučer '+r0(yd.steps).toLocaleString('hr-HR'):'Poveži Health'}</span></section>
  <section class="card" data-go="povezivanje"><span class="eyebrow">Puls u mirovanju</span><b class="num">${h.restHR?r0(h.restHR):yd.restHR?r0(yd.restHR):'—'}</b><span class="small muted">${h.restHR||yd.restHR?'otkucaja/min'+(activityBonus()?' · +'+activityBonus()+' kcal':''):'Poveži Health'}</span></section>`})()}
 </div>
 <section class="card">
  <div class="row between"><h3>Voda</h3><span class="small muted num">${water} / ${T.water} čaša</span></div>
  <div class="water">${Array.from({length:Math.max(T.water,water)},(_,i)=>`<button class="glass ${i<water?'full':''}" data-act="water" data-n="${i+1}" aria-label="${i+1} čaša"></button>`).join('')}</div>
 </section>
 ${nr?`<section class="card flat"><div class="row">${ic('bell')}<div class="grow"><div class="small muted">Sljedeći podsjetnik · <span class="num">${nr.time}</span></div><div style="font-weight:700">${esc(nr.text)}</div></div></div></section>`:''}
 <section class="card"><div class="row between"><h3>Današnji obroci</h3><span class="small muted">${mealsOn().length}</span></div>
  ${mealsOn().length?`<div class="list">${mealsOn().map(m=>mealLi(m)).join('')}</div>`:`<p class="empty">Još nema obroka. Slikaj prvi obrok i AI će izračunati kalorije i nutrijente.</p>`}</section>`;
}

function vTrening(){
 const p=S.profile,w=workoutToday(),done=S.done[dk()],exd=S.ex[dk()]||{},hw=S.health[dk()]?.workoutMin;
 return `${hw&&!done?`<div class="banner">${ic('heart')}<span>Health je danas zabilježio <b>${r0(hw)} min</b> treninga.</span><button class="btn sm primary" data-act="wdone" style="margin-left:auto">Označi odrađeno</button></div>`:''}${w.adapted?`<div class="banner">${ic('pulse')}<span>Trening je prilagođen: <b>${esc(w.adapted)}</b>. <span data-go="stanje" style="text-decoration:underline;cursor:pointer">Promijeni stanje</span></span></div>`:''}<div><span class="eyebrow">${DAYS[new Date().getDay()]}</span><h1>${esc(w.title)}</h1><p class="muted">${esc(w.focus)} · ~${w.minutes} min ${w.source==='ai'?'· <span class="pill accent">AI prilagođeno</span>':''}</p></div>
 <section class="card">
  <h3>Imaš li gym?</h3>
  <div class="seg">${Object.entries(GYMS).map(([k,v])=>`<button class="chip ${p.gym===k?'on':''}" data-act="gym" data-v="${k}">${v}</button>`).join('')}</div>
  ${p.gym==='home'?`<div class="eyebrow">Što imaš kod kuće</div><div class="seg">${Object.entries(EQUIP).map(([k,v])=>`<button class="chip ${p.equip.includes(k)?'on':''}" data-act="equip" data-v="${k}">${v}</button>`).join('')}</div>`:''}
  ${p.gym==='none'?`<p class="small muted">Bez gyma dobivaš vježbe s vlastitom težinom, krugove i kondiciju za održavanje forme.</p>`:''}
  <div class="grid2"><label class="f">Razina<select id="lvl"><option value="beg" ${p.level==='beg'?'selected':''}>Početnik</option><option value="mid" ${p.level==='mid'?'selected':''}>Srednja</option><option value="adv" ${p.level==='adv'?'selected':''}>Napredna</option></select></label>
  <label class="f">Vrijeme<select id="mins">${[20,30,45,60,75].map(m=>`<option ${+p.minutes===m?'selected':''} value="${m}">${m} min</option>`).join('')}</select></label></div>
 </section>
 <section class="card">
  <div class="row between"><h3>Zagrijavanje</h3></div><p class="small muted">${w.warmup.map(esc).join(' · ')}</p>
  <div class="divider"></div>
  <div>${w.exercises.map((e,i)=>`<div class="ex"><button class="check ${exd[i]?'on':''}" data-act="exdone" data-i="${i}" aria-label="Označi ${esc(e.name)}">${exd[i]?ic('check',3):''}</button>
   <div><div style="font-weight:700">${esc(e.name)}</div>${e.tip?`<div class="small muted">${esc(e.tip)}</div>`:''}${e.alt?`<div class="alt">Lakše: ${esc(e.alt)}</div>`:''}
   <div class="logrow">${lastLiftTxt(e.name)}<input type="number" id="lk_${i}" placeholder="kg" inputmode="decimal" aria-label="Težina kg"><span>×</span><input type="number" id="lr_${i}" placeholder="ponav." inputmode="numeric" aria-label="Ponavljanja"><button class="btn sm ghost" data-act="logset" data-i="${i}">Upiši</button></div></div>
   <div class="sr">${e.sets} × ${esc(e.reps)}<div class="small muted">odmor ${esc(e.rest)}</div></div></div>`).join('')}</div>
  <div class="divider"></div><p class="small muted">Hlađenje: ${w.cooldown.map(esc).join(' · ')}</p>
  ${w.note?`<div class="banner">${ic('bulb')}<span>${esc(w.note)}</span></div>`:''}
  <div class="row"><button class="btn ${done?'ghost':'primary'}" data-act="wdone">${ic('check')}${done?'Odrađeno ✓':'Označi kao odrađeno'}</button>
  <button class="btn ghost" data-act="aiworkout" ${sampleReady?'':'disabled'}>${ic('spark')}Prilagodi s AI</button>
  ${w.source==='ai'?`<button class="btn ghost sm" data-act="resetworkout">Vrati automatski</button>`:''}</div>
  ${sampleReady?'':aiOffNote()}
 </section>
 <section class="card"><h3>Ovaj tjedan</h3><div class="grid3" style="grid-template-columns:repeat(7,1fr)">${weekDots()}</div></section>`;
}
function weekDots(){
 const out=[],d=new Date(); const mon=new Date(d); mon.setDate(d.getDate()-((d.getDay()+6)%7));
 for(let i=0;i<7;i++){const x=new Date(mon);x.setDate(mon.getDate()+i);const k=dk(x);const isT=k===dk();
  out.push(`<div style="text-align:center"><div class="small muted">${DAYS[x.getDay()].slice(0,3)}</div><div style="width:28px;height:28px;margin:4px auto 0;border-radius:9px;display:grid;place-items:center;${S.done[k]?'background:var(--good);color:#fff':isT?'border:2px solid var(--accent)':'background:var(--surface-2)'}">${S.done[k]?ic('check',3).replace('<svg','<svg width="14" height="14"'):''}</div></div>`)}
 return out.join('');
}

let pending=null; // photo analysis result
function vHrana(){
 const T=targets(),t=totals();
 return `<div><h1>Hrana</h1><p class="muted">Slikaj obrok ili ga opiši. AI procijeni kalorije, makro i mikronutrijente.</p></div>
 ${prodPending?productCard():pending?pendingCard():`
 <section class="card">
  <button class="drop" data-act="photo">${ic('cam',1.6)}<b>Slikaj ili odaberi fotografiju obroka</b><span class="small muted">${sampleImages?'AI prepoznaje hranu i procjenjuje porciju':sampleReady?'Za analizu slike treba Claude (online) ili model s vidom. Opiši obrok riječima.':'Uključi AI u Postavkama'}</span></button>
  <button class="btn ghost" data-act="scan">${ic('code')}Skeniraj proizvod (barkod)</button>
  <div class="row" style="align-items:stretch"><input type="text" id="mealdesc" placeholder="ili opiši: 2 jaja, tost, kava s mlijekom" style="flex:1;min-width:0"><button class="btn dark" data-act="describe" ${sampleReady?'':'disabled'}>Analiziraj</button></div>
 </section>`}
 <section class="card"><div class="row between"><h3>Danas</h3><span class="num small muted">${r0(t.kcal)} / ${T.kcal} kcal</span></div>
  <div class="kv"><div><b>${r0(t.p)}</b><span>proteini g</span></div><div><b>${r0(t.c)}</b><span>UH g</span></div><div><b>${r0(t.f)}</b><span>masti g</span></div><div><b>${r1(t.micros.fiber)}</b><span>vlakna g</span></div></div>
  ${mealsOn().length?`<div class="list">${mealsOn().map(m=>mealLi(m)).join('')}</div>`:`<p class="empty">Još nema obroka danas.</p>`}</section>
 <section class="card"><details><summary>Ručni unos ${ic('plus').replace('<svg','<svg width="18" height="18"')}</summary>
  <div class="stack" style="margin-top:10px"><label class="f">Naziv<input type="text" id="m_name" placeholder="npr. Skyr s orasima"></label>
  <div class="grid2"><label class="f">kcal<input type="number" id="m_kcal" inputmode="decimal"></label><label class="f">Proteini g<input type="number" id="m_p" inputmode="decimal"></label>
  <label class="f">UH g<input type="number" id="m_c" inputmode="decimal"></label><label class="f">Masti g<input type="number" id="m_f" inputmode="decimal"></label></div>
  <button class="btn primary" data-act="manualmeal">Spremi obrok</button></div></details></section>
 ${myProducts()}
 ${recentDays()}`;
}
function recentDays(){
 const days=[...new Set(MEALS.map(m=>m.date))].filter(d=>d!==dk()).sort().reverse().slice(0,5);
 if(!days.length) return '';
 return `<section class="card"><h3>Prethodni dani</h3><div class="tbl-wrap"><table><tr><th>Dan</th><th class="r">kcal</th><th class="r">P g</th><th class="r">obroka</th></tr>
 ${days.map(d=>{const t=totals(d);return `<tr><td>${d.slice(8)}.${d.slice(5,7)}.</td><td class="r">${r0(t.kcal)}</td><td class="r">${r0(t.p)}</td><td class="r">${mealsOn(d).length}</td></tr>`}).join('')}</table></div></section>`;
}
function pendingCard(){
 const p=pending;
 if(p.loading) return `<section class="card">${p.img?`<img class="preview" src="${p.img}" alt="Obrok">`:''}<div class="row"><span class="typing"><i></i><i></i><i></i></span><span class="muted">AI analizira obrok…</span></div></section>`;
 if(p.error) return `<section class="card">${p.img?`<img class="preview" src="${p.img}" alt="">`:''}<p style="color:var(--bad)">${esc(p.error)}</p><button class="btn ghost" data-act="cancelpending">Zatvori</button></section>`;
 const r=p.res, k=p.mult;
 return `<section class="card">${p.img?`<img class="preview" src="${p.img}" alt="Obrok">`:''}
  <div class="row between"><h2>${esc(r.name)}</h2><span class="pill ${r.confidence==='visoka'?'good':r.confidence==='niska'?'warn':''}">pouzdanost: ${esc(r.confidence||'srednja')}</span></div>
  ${r.items?.length?`<p class="small muted">${r.items.map(esc).join(' · ')}</p>`:''}
  <div class="kv"><div><b>${r0(r.kcal*k)}</b><span>kcal</span></div><div><b>${r0(r.protein*k)}</b><span>proteini g</span></div><div><b>${r0(r.carbs*k)}</b><span>UH g</span></div><div><b>${r0(r.fat*k)}</b><span>masti g</span></div></div>
  <div><div class="eyebrow">Porcija</div><div class="seg" style="margin-top:6px">${[0.5,0.75,1,1.25,1.5,2].map(x=>`<button class="chip ${k===x?'on':''}" data-act="mult" data-v="${x}">${x}×</button>`).join('')}</div></div>
  <div class="tbl-wrap"><table>${MICROS.map(m=>`<tr><td>${m.n}</td><td class="r">${r1((r.micros?.[m.k]||0)*k)} ${m.u}</td></tr>`).join('')}</table></div>
  ${r.tip?`<div class="banner">${ic('bulb')}<span>${esc(r.tip)}</span></div>`:''}
  <div class="row"><button class="btn primary" data-act="savepending">${ic('check')}Spremi obrok</button><button class="btn ghost" data-act="cancelpending">Odbaci</button></div></section>`;
}

const MEAL_SCHEMA=`Vrati SAMO JSON: {"name": kratki naziv na hrvatskom, "items": [popis prepoznatih namirnica s procijenjenom količinom, npr "piletina ~150 g"], "kcal": broj, "protein": g, "carbs": g, "fat": g, "micros": {"fiber": g, "vitC": mg, "vitD": µg, "b12": µg, "iron": mg, "calcium": mg, "magnesium": mg, "potassium": mg, "zinc": mg, "omega3": g}, "confidence": "niska"|"srednja"|"visoka", "tip": jedna kratka rečenica kako obrok učiniti boljim (više proteina/nutrijenata) za cilj korisnika}`;
async function analyzePhoto(file){
 const big=await downscale(file,1024,0.82), thumb=await downscaleURL(file,160,0.7);
 pending={loading:true,img:URL.createObjectURL(big),thumb,mult:1}; if(route!=='hrana') route='hrana'; render();
 refreshAI(); if(!sampleReady||!sampleImages){ pending={...pending,loading:false,error:aiErr({code:sampleReady?'images_unavailable':'unavailable'})}; render(); return; }
 try{
  const res=await aiJSON(`Ti si nutricionist. Na slici je obrok. Prepoznaj hranu, procijeni veličinu porcije (koristi tanjur, pribor i ruku kao referencu) i izračunaj nutritivne vrijednosti za cijeli prikazani obrok. Cilj korisnika: ${GOALS[S.profile.goal]}, visok unos proteina.\n${MEAL_SCHEMA}`,{images:[big]});
  pending={...pending,loading:false,res};
 }catch(e){ pending={...pending,loading:false,error:aiErr(e)} }
 render();
}
async function analyzeText(txt){
 pending={loading:true,mult:1}; render();
 try{ const res=await aiJSON(`Ti si nutricionist. Korisnik je pojeo: "${txt}". Procijeni realne porcije ako nisu navedene (hrvatske uobičajene porcije).\n${MEAL_SCHEMA}`); pending={...pending,loading:false,res}; }
 catch(e){ pending={...pending,loading:false,error:aiErr(e)} }
 render();
}
function downscale(file,max,q){return new Promise((res,rej)=>{const img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);c.toBlob(b=>b?res(b):rej(new Error('slika')),'image/jpeg',q)};img.onerror=()=>rej(new Error('Ne mogu otvoriti sliku'));img.src=URL.createObjectURL(file)})}
function downscaleURL(file,max,q){return new Promise(res=>{const img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};img.onerror=()=>res(null);img.src=URL.createObjectURL(file)})}
function addMeal(o){
 const now=new Date();
 const m={id:uid(),date:dk(),time:now.toTimeString().slice(0,5),name:o.name||'Obrok',kcal:r0(o.kcal),p:r1(o.p),c:r1(o.c),f:r1(o.f),micros:o.micros||{},img:o.img||null};
 MEALS.push(m); saveMeal(m); return m;
}

function vNutrijenti(){
 const T=targets(),t=totals(),g=gaps();
 return `<div><h1>Nutrijenti</h1><p class="muted">Koliko si danas unio u odnosu na preporuku i što dodati.</p></div>
 <section class="card"><h3>Makronutrijenti</h3>${macroRow('Kalorije',t.kcal,T.kcal,'var(--accent)','kcal')}${macroRow('Proteini',t.p,T.p,'var(--prot)')}${macroRow('Ugljikohidrati',t.c,T.c,'var(--carb)')}${macroRow('Masti',t.f,T.f,'var(--fat)')}
 <p class="small muted">Proteini su postavljeni na ${S.profile.proteinPerKg} g po kg tjelesne mase (${T.p} g). Rasporedi ih na ${S.profile.mealsPerDay}–${+S.profile.mealsPerDay+1} obroka po ~${r0(T.p/S.profile.mealsPerDay)} g.</p></section>
 <section class="card"><h3>Vitamini i minerali</h3><div>${MICROS.map(m=>{const v=t.micros[m.k],tg=T.micros[m.k],pct=v/tg;const col=pct>=1?'var(--good)':pct>=.6?'var(--carb)':'var(--bad)';
  return `<div class="nut"><span>${m.n}</span>${bar(v,tg,col)}<span class="v">${r1(v)}/${tg} ${m.u}</span></div>`}).join('')}</div>
 <p class="small muted">Procjene iz fotografija su okvirne. Preporuke su za zdrave odrasle osobe.</p></section>
 <section class="card"><h3>Što dodati danas</h3>${g.length?g.map(x=>`<div class="gapitem"><div class="lbl">${x.n}<div class="small num" style="color:var(--accent)">−${x.left}</div></div><div class="food">${esc(x.foods)}</div></div>`).join(''):'<p class="muted">Sve je na dobrom putu za ovo doba dana.</p>'}
 <button class="btn dark" data-act="askgap" ${sampleReady?'':'disabled'}>${ic('spark')}Predloži mi večeru koja to pokriva</button></section>`;
}

let busy={};
function vPlan(){
 const p=S.profile,mp=S.mealplan;
 return `<div><h1>Meal prep</h1><p class="muted">Upiši budžet i lokaciju. AI složi tjedni plan s puno proteina, popis za kupnju po dućanima i recepte.</p></div>
 <section class="card"><div class="grid2"><label class="f">Budžet (€/tjedan)<input type="number" id="pb" value="${p.budget}" inputmode="decimal"></label><label class="f">Lokacija<input type="text" id="pl" value="${esc(p.location)}" placeholder="grad ili kvart"></label>
 <label class="f">Obroka dnevno<select id="pm">${[2,3,4,5].map(n=>`<option ${+p.mealsPerDay===n?'selected':''}>${n}</option>`).join('')}</select></label>
 <label class="f">Mogu kuhati?<select id="pc"><option value="1" ${p.cook?'selected':''}>Da</option><option value="0" ${!p.cook?'selected':''}>Ne, samo bez kuhanja</option></select></label></div>
 <label class="f">Prehrambene napomene<input type="text" id="pd" value="${esc(p.diet)}" placeholder="npr. bez laktoze, ne volim ribu"></label>
 <button class="btn primary" data-act="mkplan" ${sampleReady&&!busy.plan?'':'disabled'}>${busy.plan?'<span class="typing"><i></i><i></i><i></i></span> Slažem plan…':ic('spark')+'Napravi plan'}</button>
 ${!p.cook?`<div class="banner">${ic('fork')}<span>Ne možeš kuhati? Pogledaj i <b data-go="restorani" style="cursor:pointer">restorane u blizini</b>.</span></div>`:''}
 ${sampleReady?'':aiOffNote('Ispod je primjer plana.')}</section>
 ${planView(mp||EXAMPLE_PLAN,!mp)}`;
}
function planView(mp,example){
 if(!mp) return '';
 return `${example?'<div class="banner"><span>Ovo je <b>primjer</b> plana za Zagreb i 60 €/tjedan. Tvoj plan će zamijeniti ovaj.</span></div>':''}
 <section class="card hero"><span class="eyebrow">Tjedni plan</span><h2>${esc(mp.summary)}</h2>
 <div class="row"><span class="pill accent num">~${esc(mp.weeklyCost)} €</span><span class="pill num" style="background:color-mix(in srgb,var(--bg) 15%,transparent);color:inherit">${esc(mp.protein_per_day)} g proteina/dan</span></div></section>
 <section class="card"><h3>Dućani u blizini</h3><div class="list">${(mp.stores||[]).map(s=>`<div class="li"><div class="thumb">${ic('pin')}</div><div class="grow"><div class="t">${esc(s.name)}</div><div class="small muted">${esc(s.why)}</div></div><div style="text-align:right"><div class="stars">${'★'.repeat(Math.max(0,Math.min(5,s.quality||0)))}</div><div class="small muted">${esc(s.price_level||'')}</div></div></div>`).join('')}</div>
 <p class="small muted">Procjena na temelju poznatih trgovačkih lanaca i tipičnih cijena. Provjeri akcije i radno vrijeme.</p></section>
 <section class="card"><h3>Popis za kupnju</h3><div class="tbl-wrap"><table><tr><th>Namirnica</th><th>Gdje</th><th class="r">€</th></tr>
 ${(mp.shopping||[]).map(x=>`<tr><td><b>${esc(x.item)}</b><div class="small muted">${esc(x.qty)}</div></td><td>${esc(x.store)}</td><td class="r">${(+x.price_eur||0).toFixed(2)}</td></tr>`).join('')}
 <tr><td colspan="2"><b>Ukupno</b></td><td class="r"><b>${(mp.shopping||[]).reduce((a,x)=>a+(+x.price_eur||0),0).toFixed(2)}</b></td></tr></table></div></section>
 <section class="card"><h3>Recepti</h3>${(mp.recipes||[]).map(r=>`<details><summary><span>${esc(r.name)}</span><span class="small num muted">${esc(r.protein_g)} g P · ${esc(r.kcal)} kcal</span></summary>
  <p class="small muted" style="margin-top:6px">${esc(r.servings)} porcija · ~${esc(r.cost_eur)} € po porciji</p><p class="small" style="margin-top:6px">${(r.ingredients||[]).map(esc).join(' · ')}</p><ol class="steps">${(r.steps||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol></details>`).join('')}</section>
 ${mp.prep_schedule?.length?`<section class="card"><h3>Raspored pripreme</h3><ol class="steps">${mp.prep_schedule.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>`:''}
 ${mp.tips?.length?`<section class="card"><h3>Savjeti</h3><ol class="steps">${mp.tips.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>`:''}`;
}
const EXAMPLE_PLAN={summary:'Piletina, jaja, skyr i mahunarke: 3 obroka dnevno kuhana u nedjelju i srijedu',weeklyCost:'58',protein_per_day:'165',
 stores:[{name:'Lidl',quality:4,price_level:'€',why:'Najjeftiniji skyr, jaja, zamrznuta piletina i povrće'},{name:'Kaufland',quality:4,price_level:'€',why:'Veliki izbor mesa na akciji, mahunarke u rinfuzi'},{name:'Tržnica (Dolac / kvartovska)',quality:5,price_level:'€€',why:'Sezonsko povrće i voće, bolja kvaliteta za sličnu cijenu'}],
 shopping:[{item:'Pileća prsa',qty:'2 kg',store:'Kaufland',price_eur:15.98},{item:'Jaja M',qty:'30 kom',store:'Lidl',price_eur:7.5},{item:'Skyr natur',qty:'6 × 450 g',store:'Lidl',price_eur:8.94},{item:'Posni sir',qty:'1 kg',store:'Lidl',price_eur:4.2},{item:'Zobene pahuljice',qty:'1 kg',store:'Lidl',price_eur:1.49},{item:'Riža basmati',qty:'1 kg',store:'Kaufland',price_eur:2.49},{item:'Crveni grah / leća',qty:'2 × 400 g',store:'Kaufland',price_eur:1.98},{item:'Brokula, paprika, mrkva',qty:'~3 kg',store:'Tržnica',price_eur:8},{item:'Banane i jabuke',qty:'2 kg',store:'Tržnica',price_eur:4},{item:'Tuna u vlastitom soku',qty:'3 konzerve',store:'Lidl',price_eur:3.6}],
 recipes:[{name:'Piletina s rižom i povrćem iz pećnice',servings:6,protein_g:48,kcal:560,cost_eur:2.4,ingredients:['1,2 kg piletine','400 g riže','1 kg povrća','začini, maslinovo ulje'],steps:['Pećnica na 200 °C.','Piletinu i povrće začini, peci 25 min.','Skuhaj rižu, podijeli u 6 posuda.']},{name:'Overnight zob sa skyrom',servings:5,protein_g:35,kcal:420,cost_eur:1.3,ingredients:['250 g zobi','5 × 150 g skyra','banane','cimet'],steps:['Pomiješaj zob, skyr i malo mlijeka.','Prelij voćem, u hladnjak preko noći.']},{name:'Chili s grahom i piletinom',servings:4,protein_g:42,kcal:510,cost_eur:1.9,ingredients:['500 g mljevene piletine','2 konzerve graha','pelati','paprika, luk'],steps:['Popirjaj luk i meso.','Dodaj grah, pelate, začine i kuhaj 20 min.']}],
 prep_schedule:['Nedjelja: piletina iz pećnice + riža (6 porcija), overnight zob','Srijeda: chili (4 porcije), kuhaj jaja za međuobroke'],
 tips:['Posni sir i skyr su najjeftiniji izvor proteina po euru.','Zamrzni pola porcija da ostanu svježe.']};

async function mkPlan(){
 const p=S.profile; busy.plan=true; render();
 try{
  const res=await aiJSON(`Ti si nutricionist i stručnjak za kupnju u Hrvatskoj. Napravi tjedni meal prep plan.
${ctxBlock()}
Uvjeti: budžet ${p.budget} € tjedno, lokacija ${p.location}, ${p.mealsPerDay} obroka dnevno, ${p.cook?'može kuhati':'NE može kuhati — samo namirnice bez kuhanja (gotovi proteini, jogurti, konzerve, pečena piletina iz trgovine, sendviči)'}, napomene: ${p.diet||'nema'}.
Cilj: što više proteina po euru, dobra kvaliteta. Analiziraj koji su trgovački lanci i tržnice tipično dostupni na toj lokaciji (Lidl, Kaufland, Konzum, Spar, Plodine, Tommy, Studenac, Eurospin, tržnice itd.), usporedi kvalitetu i cijene i preporuči gdje što kupiti. Cijene neka budu realne procjene za 2026. u eurima. Ukupna cijena ne smije prijeći budžet.
Vrati SAMO JSON: {"summary": jedna rečenica, "weeklyCost": broj kao string, "protein_per_day": broj kao string, "stores":[{"name","quality":1-5,"price_level":"€"|"€€"|"€€€","why"}], "shopping":[{"item","qty","store","price_eur":broj}], "recipes":[{"name","servings","protein_g","kcal","cost_eur","ingredients":[...],"steps":[...]}] (3-5 recepata), "prep_schedule":[...], "tips":[...]}`,{modelTier:'complex'});
  S.mealplan=res; save(); toast('Plan je spreman');
 }catch(e){ toast(aiErr(e)) }
 busy.plan=false; render();
}

function vRestorani(){
 const p=S.profile,r=S.restaurants;
 return `<div><h1>Restorani</h1><p class="muted">Kad ne možeš kuhati: gdje jesti u blizini i što naručiti da pogodiš proteine i budžet.</p></div>
 <section class="card"><div class="grid2"><label class="f">Lokacija<input type="text" id="rl" value="${esc(activeStatus().travel?.city||p.location)}"></label><label class="f">Budžet po obroku (€)<input type="number" id="rb" value="${esc(p.mealBudget||12)}"></label></div>
 <label class="f">Što ti se jede?<input type="text" id="rw" placeholder="npr. ručak, nešto brzo, azijsko" value="${esc(p.craving||'')}"></label>
 <button class="btn primary" data-act="mkrest" ${sampleReady&&!busy.rest?'':'disabled'}>${busy.rest?'<span class="typing"><i></i><i></i><i></i></span> Tražim…':ic('spark')+'Predloži restorane'}</button>
 ${sampleReady?'':aiOffNote()}${sampleReady&&AI.provider()==='local'?'<p class="small muted">Bez interneta AI predlaže prema općem znanju; konkretna imena restorana provjeri.</p>':''}</section>
 ${r?`<section class="card"><div class="row between"><h3>Prijedlozi za ${esc(r.location)}</h3></div>${r.notes?`<p class="small muted">${esc(r.notes)}</p>`:''}
 <div class="list">${(r.picks||[]).map(x=>`<div class="li" style="align-items:flex-start"><div class="thumb">${ic('fork')}</div><div class="grow"><div class="t">${esc(x.name)}</div><div class="small muted">${esc(x.type)}${x.area?' · '+esc(x.area):''}</div>
  <div class="small" style="margin-top:4px"><b>Naruči:</b> ${esc(x.order)}</div><div class="small muted">${esc(x.why)}</div></div>
  <div style="text-align:right" class="small num"><div>${esc(x.protein_g)} g P</div><div class="muted">~${esc(x.kcal)} kcal</div><div class="muted">~${esc(x.price_eur)} €</div></div></div>`).join('')}</div>
 <p class="small muted">AI nema uvid u trenutno radno vrijeme i cijene. Provjeri prije odlaska.</p></section>
 ${r.rules?.length?`<section class="card"><h3>Pravila za bilo koji restoran</h3><ol class="steps">${r.rules.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section>`:''}`
 :`<section class="card flat"><h3>Opća pravila dok ne pokreneš pretragu</h3><ol class="steps"><li>Biraj jelo s mesom, ribom ili jajima kao glavnim dijelom tanjura.</li><li>Grill umjesto pohanog; umaci sa strane.</li><li>Dodaj salatu ili povrće umjesto drugog priloga.</li><li>Fast food: dupli protein, bez pomfrita, voda.</li></ol></section>`}`;
}
async function mkRest(){
 const p=S.profile; busy.rest=true; render();
 try{
  const res=await aiJSON(`Korisnik ne može kuhati i treba jesti vani. Lokacija: ${p.location}. Budžet po obroku: ${p.mealBudget||12} €. Želja: ${p.craving||'bilo što'}.
${ctxBlock()}
Predloži 5-7 konkretnih opcija: poznate restorane, lance i vrste mjesta koje realno postoje na toj lokaciji (ako nisi siguran da određeni restoran postoji, predloži vrstu mjesta ili poznati lanac). Za svako navedi što naručiti da bude najviše proteina i da pokrije ono što korisniku danas fali.
Vrati SAMO JSON: {"location": string, "notes": jedna rečenica, "picks":[{"name","type","area","order","protein_g","kcal","price_eur","why"}], "rules":[3-5 kratkih pravila]}`);
  S.restaurants=res; save();
 }catch(e){ toast(aiErr(e)) }
 busy.rest=false; render();
}

/* ---------- mood + energy + fridge recipes ---------- */
const MOODS={tired:'Umoran',stress:'Pod stresom',good:'Dobro',motiv:'Motiviran',sad:'Bezvoljan',sick:'Prehlađen'};
const ENERGY=['','Nemam snage','Malo','Srednje','Dobro','Puno'];
const LOCAL_RECIPES=[
 {name:'Kajgana s povrćem i sirom',need:['jaja'],opt:['paprika','sir','špinat','rajčica','luk'],min:10,energy:1,protein_g:28,kcal:420,steps:['Narezano povrće popirjaj 3 min.','Dodaj razmućena jaja i sir, miješaj dok se ne zgusne.']},
 {name:'Skyr bowl s voćem i orasima',need:['skyr'],opt:['banana','borovnice','orasi','zob','med'],min:3,energy:1,protein_g:30,kcal:380,steps:['Skyr u zdjelu.','Dodaj voće, orahe i malo zobi.']},
 {name:'Tuna salata s grahom',need:['tuna'],opt:['grah','luk','rajčica','krastavac','kukuruz'],min:5,energy:1,protein_g:38,kcal:450,steps:['Ocijedi tunu i grah.','Pomiješaj s povrćem, maslinovim uljem i limunom.']},
 {name:'Piletina na tavi s rižom',need:['piletina'],opt:['riža','brokula','paprika','luk','tikvica'],min:25,energy:3,protein_g:45,kcal:580,steps:['Skuhaj rižu.','Piletinu narezanu na kocke zapeci 8 min, dodaj povrće još 5 min.','Začini i posluži.']},
 {name:'Juha od povrća s jajem',need:['jaja'],opt:['mrkva','luk','krumpir','tjestenina','češnjak'],min:20,energy:2,protein_g:18,kcal:320,steps:['Povrće prokuhaj 15 min u slanoj vodi.','Umiješaj razmućeno jaje i kuhaj još 2 min.'],moods:['sick','sad']},
 {name:'Tortilja wrap s piletinom ili sirom',need:['tortilja'],opt:['piletina','sir','salata','rajčica','jogurt'],min:8,energy:1,protein_g:32,kcal:480,steps:['Zagrij tortilju.','Napuni proteinom i povrćem, zamotaj.']},
 {name:'Zobena kaša s jajem i bananom',need:['zob'],opt:['jaja','banana','mlijeko','cimet'],min:8,energy:1,protein_g:22,kcal:410,steps:['Zob kuhaj u mlijeku 4 min.','Umiješaj jaje i kuhaj još 1 min, dodaj bananu.'],moods:['tired','stress']},
 {name:'Tjestenina s mljevenim mesom i rajčicom',need:['tjestenina'],opt:['mljeveno meso','rajčica','pelati','luk','sir'],min:25,energy:3,protein_g:40,kcal:650,steps:['Skuhaj tjesteninu.','Meso popirjaj s lukom, dodaj pelate 10 min.','Pomiješaj, pospi sirom.']}
];
function localFridge(){
 const f=S.fridge, have=f.items.map(x=>x.toLowerCase());
 const has=w=>have.some(h=>h.includes(w)||w.includes(h));
 return LOCAL_RECIPES.map(r=>{const okNeed=r.need.every(has),opt=r.opt.filter(has);
  let sc=(okNeed?10:0)+opt.length*2-(r.energy>f.energy?6:0)-(r.min>f.minutes?5:0)+((r.moods||[]).includes(f.mood)?3:0);
  return {...r,score:sc,have:[...r.need.filter(has),...opt],missing:r.need.filter(w=>!has(w)),minutes:r.min,why:okNeed?`Imaš ${[...r.need,...opt].join(', ')}.`:'Fali ti glavni sastojak.'}})
  .filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
}
let fridgeFile=null;
function vHladnjak(){
 const f=S.fridge, res=f.result;
 return `<div><h1>Što kuhati?</h1><p class="muted">Kako se osjećaš, koliko imaš energije i što ti je ostalo u hladnjaku. Dobit ćeš recepte koji to pokrivaju i paze na proteine.</p></div>
 <section class="card"><h3>Kako se osjećaš?</h3><div class="seg">${Object.entries(MOODS).map(([k,v])=>`<button class="chip ${f.mood===k?'on':''}" data-act="mood" data-v="${k}">${v}</button>`).join('')}</div>
 <div class="row between"><h3>Energija</h3><span class="small muted">${ENERGY[f.energy]}</span></div>
 <input type="range" id="energy" min="1" max="5" step="1" value="${f.energy}" style="width:100%;accent-color:var(--accent)">
 <div class="eyebrow">Koliko vremena imaš</div><div class="seg">${[5,15,30,60].map(m=>`<button class="chip ${f.minutes===m?'on':''}" data-act="fmin" data-v="${m}">${m===60?'60+':m} min</button>`).join('')}</div></section>
 <section class="card"><div class="row between"><h3>U hladnjaku</h3><span class="small muted">${f.items.length} namirnica</span></div>
 <div class="seg">${f.items.map((x,i)=>`<button class="chip" data-act="frdel" data-i="${i}" aria-label="Makni ${esc(x)}">${esc(x)} ✕</button>`).join('')||'<span class="small muted">Dodaj što imaš.</span>'}</div>
 <div class="row" style="align-items:stretch"><input type="text" id="fradd" placeholder="npr. jaja, tikvica, sir" style="flex:1;min-width:0"><button class="btn dark" data-act="fradd">${ic('plus')}</button></div>
 <button class="btn ghost" data-act="frphoto" ${sampleImages?'':'disabled'}>${ic('cam')}Slikaj hladnjak${fridgeFile?' ✓':''}</button>
 ${sampleImages?'<p class="small muted">AI s fotografije sam prepozna namirnice.</p>':''}
 <button class="btn primary" data-act="mkfridge" ${busy.fridge?'disabled':''}>${busy.fridge?'<span class="typing"><i></i><i></i><i></i></span> Smišljam…':ic('spark')+'Predloži recepte'}</button>
 ${sampleReady?'':'<p class="small muted">Bez AI-ja dobivaš ugrađene recepte; s AI-jem recepte skrojene baš za tebe.</p>'}</section>
 ${res?`${res.message?`<div class="banner">${ic('bulb')}<span>${esc(res.message)}</span></div>`:''}
 ${res.detected?.length?`<p class="small muted">Prepoznato na slici: ${res.detected.map(esc).join(', ')}</p>`:''}
 ${(res.recipes||[]).map((r,i)=>`<section class="card"><div class="row between"><h2>${esc(r.name)}</h2><span class="pill accent num">${esc(r.minutes)} min</span></div>
  <p class="small muted">${esc(r.why||'')}</p>
  <div class="kv"><div><b>${r0(r.protein_g)}</b><span>proteini g</span></div><div><b>${r0(r.kcal)}</b><span>kcal</span></div><div><b>${(r.have||[]).length}</b><span>imaš</span></div><div><b>${(r.missing||[]).length}</b><span>fali</span></div></div>
  ${r.missing?.length?`<p class="small"><b>Fali:</b> ${r.missing.map(esc).join(', ')}</p>`:''}
  <ol class="steps">${(r.steps||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
  <button class="btn ghost sm" data-act="atefridge" data-i="${i}">${ic('check')}Pojeo sam ovo</button></section>`).join('')||'<p class="empty">Nema dobrog spoja. Dodaj još koju namirnicu.</p>'}`:''}`;
}
async function mkFridge(){
 const f=S.fridge; busy.fridge=true; render();
 try{
  if(!sampleReady){ f.result={message:'Ugrađeni recepti prema onome što imaš.',recipes:localFridge()}; }
  else{
   const opts={}; if(fridgeFile&&sampleImages) opts.images=[await downscale(fridgeFile,1024,.8)];
   f.result=await aiJSON(`Ti si kuhar i nutricionist. Predloži 3 recepta.
Raspoloženje: ${MOODS[f.mood]}. Energija: ${f.energy}/5 (${ENERGY[f.energy]}). Vrijeme: ${f.minutes} min.
U hladnjaku: ${f.items.join(', ')||'nije navedeno'}.${opts.images?' Na priloženoj slici je hladnjak — prepoznaj namirnice i koristi ih.':''}
${ctxBlock()}
Pravila: koristi uglavnom ono što ima (smije pretpostaviti osnovne začine, ulje, sol); s malo energije i vremena samo jednostavna jela s malo posuđa; prilagodi raspoloženju (npr. stres → magnezij, umor → stabilna energija, prehlada → topla juha, vitamin C); pokrij ono što mu danas fali i drži visok protein.
Vrati SAMO JSON: {"message": jedna topla rečenica prilagođena raspoloženju, "detected":[namirnice sa slike ili prazno], "recipes":[{"name","minutes":broj,"protein_g":broj,"kcal":broj,"why":zašto baš ovo sada,"have":[...],"missing":[...],"steps":[...]}]}`,opts);
  }
  save();
 }catch(e){ toast(aiErr(e)) }
 busy.fridge=false; render();
}

/* ---------- barcode / products ---------- */
let prodPending=null;
async function scanProduct(file){
 prodPending={loading:true,img:URL.createObjectURL(file)}; route='hrana'; render();
 const code=await decodeBarcode(file);
 if(code&&S.products[code]){ const pr=S.products[code]; prodPending={key:code,prod:pr,grams:pr.serving_g||100,img:prodPending.img}; render(); return; }
 if(code){ const pr=await offLookup(code); if(pr){ S.products[code]=pr; save(); prodPending={key:code,prod:pr,grams:pr.serving_g||100,img:prodPending.img,isNew:true}; render(); return; } }
 refreshAI();
 if(!sampleImages){ prodPending={error:code?`Barkod ${code} još nije u tvojim proizvodima. Nije pronađen ni u bazi Open Food Facts. Slikaj deklaraciju dok je uključen AI koji čita slike, ili upiši obrok ručno.`:'Barkod nije prepoznat. Slikaj ga izbliza, ravno i oštro, ili ga upiši ručno.',img:prodPending.img}; render(); return; }
 try{
  const big=await downscale(file,1280,.85);
  const res=await aiJSON(`Na slici je prehrambeni proizvod (barkod, ambalaža ili nutritivna deklaracija). Očitaj barkod ako se vide brojke, prepoznaj proizvod i vrijednosti na 100 g. Ako deklaracija nije vidljiva, procijeni prema poznatom proizvodu i stavi confidence "niska".
Vrati SAMO JSON: {"barcode": znamenke ili null, "name": naziv, "brand": marka ili "", "serving_g": uobičajena porcija u g, "per100": {"kcal","protein","carbs","fat","fiber","sugar","salt"}, "micros100": {"vitC","vitD","b12","iron","calcium","magnesium","potassium","zinc","omega3"} (0 ako nepoznato), "confidence": "niska"|"srednja"|"visoka"}`,{images:[big]});
  const key=code||res.barcode||('n:'+res.name);
  if(S.products[key]) { prodPending={key,prod:S.products[key],grams:S.products[key].serving_g||100,img:prodPending.img}; }
  else { const pr={...res,code:code||res.barcode||null}; S.products[key]=pr; save(); prodPending={key,prod:pr,grams:pr.serving_g||100,img:prodPending.img,isNew:true}; }
 }catch(e){ prodPending={error:aiErr(e),img:prodPending.img} }
 render();
}
function productCard(){
 const pp=prodPending;
 if(pp.loading) return `<section class="card"><img class="preview" src="${pp.img}" alt=""><div class="row"><span class="typing"><i></i><i></i><i></i></span><span class="muted">Čitam barkod i deklaraciju…</span></div></section>`;
 if(pp.error) return `<section class="card">${pp.img?`<img class="preview" src="${pp.img}" alt="">`:''}<p style="color:var(--bad)">${esc(pp.error)}</p><button class="btn ghost" data-act="prodcancel">Zatvori</button></section>`;
 const pr=pp.prod,k=pp.grams/100,h=pr.per100||{};
 return `<section class="card"><div class="row between"><div><h2>${esc(pr.name)}</h2><p class="small muted">${esc(pr.brand||'')}${pr.code?' · <span class="num">'+esc(pr.code)+'</span>':''}</p></div>${pp.isNew?`<span class="pill accent">${pr.source==='Open Food Facts'?'iz Open Food Facts':'novo u tvojim proizvodima'}</span>`:'<span class="pill good">iz tvojih proizvoda</span>'}</div>
 <div class="eyebrow">Koliko grama</div><div class="row"><input type="number" id="pgr" value="${pp.grams}" inputmode="decimal" style="width:100px"><div class="seg">${[...new Set([50,100,150,200,+pr.serving_g||0])].filter(Boolean).map(g=>`<button class="chip ${+pp.grams===g?'on':''}" data-act="pgrams" data-v="${g}">${g} g${g===+pr.serving_g?' (porcija)':''}</button>`).join('')}</div></div>
 <div class="kv"><div><b>${r0(h.kcal*k)}</b><span>kcal</span></div><div><b>${r1(h.protein*k)}</b><span>proteini g</span></div><div><b>${r1(h.carbs*k)}</b><span>UH g</span></div><div><b>${r1(h.fat*k)}</b><span>masti g</span></div></div>
 <p class="small muted">Na 100 g: ${r0(h.kcal)} kcal · P ${r1(h.protein)} g · šećeri ${r1(h.sugar)} g · sol ${r1(h.salt)} g · vlakna ${r1(h.fiber)} g${h.protein&&h.kcal?` · <b>${r1(h.protein*4/h.kcal*100)} % kalorija iz proteina</b>`:''}</p>
 <div class="row"><button class="btn primary" data-act="prodsave">${ic('check')}Dodaj u obroke</button><button class="btn ghost" data-act="prodcancel">Odustani</button></div></section>`;
}
function myProducts(){
 const e=Object.entries(S.products); if(!e.length) return `<section class="card"><h3>Traži po barkodu</h3><div class="row" style="align-items:stretch"><input type="text" id="bcin" inputmode="numeric" placeholder="npr. 3850104…" style="flex:1;min-width:0"><button class="btn sm dark" data-act="bcfind">Traži</button></div><p class="small muted">Pretražuje Open Food Facts kad imaš internet. Pronađeni proizvodi ostaju spremljeni i za offline.</p></section>`;
 return `<section class="card"><div class="row between"><h3>Moji proizvodi</h3><span class="small muted">${e.length}</span></div><div class="list">${e.slice(-12).reverse().map(([k,p])=>`<div class="li"><div class="thumb">${ic('code')}</div><div class="grow"><div class="t">${esc(p.name)}</div><div class="small muted num">${r0(p.per100?.kcal)} kcal · P ${r1(p.per100?.protein)} g / 100 g</div></div><button class="btn sm ghost" data-act="prodpick" data-k="${esc(k)}">Dodaj</button></div>`).join('')}</div>
 <div class="row" style="align-items:stretch"><input type="text" id="bcin" inputmode="numeric" placeholder="ili upiši barkod" style="flex:1;min-width:0"><button class="btn sm dark" data-act="bcfind">Traži</button></div></section>`;
}

/* ---------- sleep ---------- */
function sleepAvg(n=7){const v=[];for(let i=0;i<n;i++){const d=new Date();d.setDate(d.getDate()-i);const z=S.sleep[dk(d)];if(z)v.push(+z.hours)}return v.length?r1(v.reduce((a,b)=>a+b,0)/v.length):null}
function hoursBetween(a,b){const[ah,am]=a.split(':').map(Number),[bh,bm]=b.split(':').map(Number);let m=(bh*60+bm)-(ah*60+am);if(m<=0)m+=1440;return r1(m/60)}
function vSan(){
 const z0=S.sleep[dk()]||{};const z={bed:z0.bed||'23:00',wake:z0.wake||'07:00',q:z0.q||3};
 const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(dk(d))}
 const avg=sleepAvg(), beds=days.map(d=>S.sleep[d]?.bed).filter(Boolean).map(b=>{let[h,m]=b.split(':').map(Number);if(h<12)h+=24;return h*60+m});
 const spread=beds.length>1?Math.round(Math.max(...beds)-Math.min(...beds)):null;
 const tip=avg==null?'Upiši san nekoliko dana pa ćeš ovdje vidjeti savjete.':avg<7?`Spavaš u prosjeku ${avg} h. Ispod 7 sati otežava oporavak mišića i pojačava glad. Probaj leći 30 min ranije.`:spread!=null&&spread>90?`Vrijeme lijeganja ti varira ${Math.round(spread/60*10)/10} h. Stalniji ritam pomaže kvaliteti sna više od dodatnog sata vikendom.`:'Dobar ritam spavanja. Tako i nastavi.';
 return `<div><h1>San</h1><p class="muted">Upiši kad si legao i ustao. San utječe na oporavak, glad i trening.</p></div>
 <section class="card"><h3>Sinoć</h3><div class="grid2"><label class="f">Legao<input type="time" id="sb" value="${z.bed}"></label><label class="f">Ustao<input type="time" id="sw" value="${z.wake}"></label></div>
 <div class="eyebrow">Kvaliteta</div><div class="seg">${[1,2,3,4,5].map(q=>`<button class="chip ${+z.q===q?'on':''}" data-act="sq" data-v="${q}">${['','Loše','Slabo','OK','Dobro','Odlično'][q]}</button>`).join('')}</div>
 <button class="btn primary" data-act="savesleep">${S.sleep[dk()]?'Ažuriraj':'Spremi'} · <span class="num" id="sh">${hoursBetween(z.bed,z.wake)} h</span></button></section>
 <section class="card"><div class="row between"><h3>Zadnjih 7 noći</h3><span class="small muted num">prosjek ${avg??'—'} h</span></div>
 <div class="bars">${days.map(d=>{const h=S.sleep[d]?.hours||0;return `<div><span class="num">${h||''}</span><i style="height:${Math.min(100,h/10*100)}%;${h&&h<7?'background:var(--carb)':''}"></i><span>${DAYS[new Date(d+'T12:00').getDay()].slice(0,3)}</span></div>`}).join('')}</div>
 <div class="banner">${ic('bulb')}<span>${esc(tip)}</span></div></section>
 <section class="card flat"><h3>Apple Health i Google Fit</h3><p class="small muted">San se može uvesti iz Healtha ili aplikacije sata preko stranice <b data-go="povezivanje" style="cursor:pointer;color:var(--accent)">Povezivanje</b>, ili ga upiši ovdje. Asistentu možeš napisati i "spavao sam 6,5 sati, loše" pa će ga sam upisati.</p></section>`;
}
let sleepQ=null;

/* ---------- supplements ---------- */
const SUPP_PRESETS=[
 {name:'Vitamin D3',dose:'25 µg (1000 IU)',micros:{vitD:25}},{name:'Omega-3',dose:'1 g EPA+DHA',micros:{omega3:1}},
 {name:'Kreatin',dose:'5 g',micros:{}},{name:'Magnezij',dose:'200 mg',micros:{magnesium:200}},
 {name:'Cink',dose:'10 mg',micros:{zinc:10}},{name:'Whey protein',dose:'1 mjerica (30 g)',micros:{calcium:120},kcal:120,p:24},
 {name:'Vitamin C',dose:'500 mg',micros:{vitC:500}},{name:'B12',dose:'25 µg',micros:{b12:25}}
];
function vSuplementi(){
 const t=S.suppTaken[dk()]||{};
 const streak=s=>{let n=0;for(let i=0;i<60;i++){const d=new Date();d.setDate(d.getDate()-i);if(S.suppTaken[dk(d)]?.[s.id])n++;else if(i>0)break}return n};
 return `<div><h1>Suplementi</h1><p class="muted">Kvačica svaki dan. Vitamini i minerali iz suplemenata ulaze u dnevni zbroj nutrijenata.</p></div>
 <section class="card">${S.supps.length?`<div class="list">${S.supps.map(s=>`<div class="li"><button class="check ${t[s.id]?'on':''}" data-act="supp" data-id="${s.id}" aria-label="Uzeto: ${esc(s.name)}">${t[s.id]?ic('check',3):''}</button>
  <div class="grow"><div class="t">${esc(s.name)}</div><div class="small muted">${esc(s.dose)} · <span class="num">${esc(s.time||'')}</span>${streak(s)>1?` · <span style="color:var(--good);font-weight:700">${streak(s)} dana zaredom</span>`:''}</div></div>
  <button class="iconbtn" data-act="suppdel" data-id="${s.id}" aria-label="Makni">${ic('trash')}</button></div>`).join('')}</div>`:'<p class="empty">Nemaš dodanih suplemenata.</p>'}</section>
 <section class="card"><h3>Dodaj</h3><div class="seg">${SUPP_PRESETS.filter(p=>!S.supps.some(s=>s.name===p.name)).map((p,i)=>`<button class="chip" data-act="suppadd" data-v="${esc(p.name)}">+ ${esc(p.name)}</button>`).join('')}</div>
 <div class="row" style="align-items:stretch"><input type="text" id="spn" placeholder="Drugi suplement" style="flex:1;min-width:0"><input type="text" id="spd" placeholder="doza" style="width:110px"><button class="btn dark" data-act="suppcustom">${ic('plus')}</button></div>
 <p class="small muted">Ako uzimaš lijekove ili imaš zdravstvenih tegoba, nove suplemente provjeri s liječnikom ili ljekarnikom.</p></section>`;
}

/* ---------- strength ---------- */
const e1rm=(kg,reps)=>kg?kg*(1+reps/30):reps;
function lastLiftTxt(name){const v=S.lifts[name];if(!v?.length)return '';const l=v[v.length-1];const sug=nextSuggestion(name);return `<span class="last">Zadnje: ${l.kg?l.kg+' kg × ':''}${l.reps}${sug?' → '+sug:''}</span>`}
function nextSuggestion(name){const v=S.lifts[name];if(!v?.length)return '';const l=v[v.length-1];if(!l.kg)return `probaj ${l.reps+2}`;return l.reps>=10?`${r1(l.kg+2.5)} kg`:`${l.kg} kg × ${l.reps+1}`}
function vSnaga(){
 const e=Object.entries(S.lifts).sort((a,b)=>b[1][b[1].length-1].d.localeCompare(a[1][a[1].length-1].d));
 return `<div><h1>Snaga</h1><p class="muted">Upisuj težinu i ponavljanja u treningu. Ovdje vidiš napredak i prijedlog za sljedeći put.</p></div>
 ${e.length?e.map(([n,v])=>{const best=Math.max(...v.map(x=>e1rm(x.kg,x.reps)));const first=e1rm(v[0].kg,v[0].reps),last=e1rm(v[v.length-1].kg,v[v.length-1].reps);const ch=first?Math.round((last-first)/first*100):0;
  const pts=v.slice(-12).map(x=>({d:x.d,kg:r1(e1rm(x.kg,x.reps))}));
  return `<section class="card"><div class="row between"><h3>${esc(n)}</h3><span class="pill ${ch>0?'good':ch<0?'warn':''} num">${ch>0?'+':''}${ch} %</span></div>
  <div class="stat"><div><b>${v[v.length-1].kg?v[v.length-1].kg+' kg':'—'} × ${v[v.length-1].reps}</b><span>zadnja serija</span></div><div><b>${v[0].kg?r1(best)+' kg':r0(best)}</b><span>${v[0].kg?'procijenjeni 1RM':'najviše ponavljanja'}</span></div></div>
  ${pts.length>1?spark(pts):''}<p class="small"><b>Sljedeći put:</b> ${esc(nextSuggestion(n))}</p></section>`}).join('')
 :`<section class="card flat"><p class="empty">Još nema zapisa. U treningu kod svake vježbe upiši kilograme i ponavljanja.</p><button class="btn primary" data-go="trening">Otvori trening</button></section>`}`;
}

/* ---------- weekly report ---------- */
function weekStats(offset=0){
 const T=targets(),days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i-offset*7);days.push(dk(d))}
 const logged=days.filter(d=>mealsOn(d).filter(m=>!m.demo).length);
 const tt=logged.map(d=>totals(d));
 const avg=k=>tt.length?tt.reduce((a,t)=>a+t[k],0)/tt.length:0;
 const sl=days.map(d=>S.sleep[d]?.hours).filter(Boolean);
 const w=S.weights.filter(x=>days.includes(x.d)).sort((a,b)=>a.d.localeCompare(b.d));
 const suppDays=days.filter(d=>S.supps.length&&S.supps.every(s=>S.suppTaken[d]?.[s.id])).length;
 return {days,logged:logged.length,kcal:r0(avg('kcal')),p:r0(avg('p')),protHit:tt.filter(t=>t.p>=T.p*.9).length,
  workouts:days.filter(d=>S.done[d]).length,water:r1(days.reduce((a,d)=>a+(S.water[d]||0),0)/7),sleep:sl.length?r1(sl.reduce((a,b)=>a+b,0)/sl.length):null,
  wchange:w.length>1?r1(w[w.length-1].kg-w[0].kg):null,suppDays};
}
function vIzvjestaj(){
 const a=weekStats(0),b=weekStats(1),T=targets();
 const delta=(x,y,u='',good=1)=>y==null||x==null||!y?'':`<em style="color:${(x-y)*good>=0?'var(--good)':'var(--bad)'}">${x-y>=0?'+':''}${r1(x-y)}${u} vs prošli</em>`;
 return `<div><h1>Tjedni izvještaj</h1><p class="muted">Zadnjih 7 dana: ${a.days[0].slice(8)}.${a.days[0].slice(5,7)}. – ${a.days[6].slice(8)}.${a.days[6].slice(5,7)}.</p></div>
 <section class="card"><div class="stat">
  <div><b>${a.workouts} / 6</b><span>treninga</span> ${delta(a.workouts,b.workouts)}</div>
  <div><b>${a.protHit} / ${a.logged||0}</b><span>dana s dovoljno proteina</span></div>
  <div><b>${a.p} g</b><span>prosj. proteini (cilj ${T.p})</span> ${delta(a.p,b.p,' g')}</div>
  <div><b>${a.kcal}</b><span>prosj. kcal (cilj ${T.kcal})</span></div>
  <div><b>${a.sleep??'—'} h</b><span>prosj. san</span> ${delta(a.sleep,b.sleep,' h')}</div>
  <div><b>${a.water}</b><span>prosj. čaša vode</span></div>
  <div><b>${a.wchange==null?'—':(a.wchange>0?'+':'')+a.wchange+' kg'}</b><span>promjena težine</span></div>
  <div><b>${a.suppDays} / 7</b><span>dana svi suplementi</span></div>
 </div>${a.logged<3?'<p class="small muted">Za pouzdaniji izvještaj upisuj obroke barem 4–5 dana u tjednu.</p>':''}</section>
 <section class="card"><div class="row between"><h3>Analiza i plan za idući tjedan</h3>${S.report?`<span class="small muted">${esc(S.report.date)}</span>`:''}</div>
 ${S.report?`<p style="white-space:pre-wrap">${esc(S.report.text)}</p>`:'<p class="muted">Claude pregleda tvoj tjedan i predloži 3 konkretne promjene.</p>'}
 <button class="btn primary" data-act="mkreport" ${sampleReady&&!busy.report?'':'disabled'}>${busy.report?'<span class="typing"><i></i><i></i><i></i></span> Analiziram…':ic('spark')+(S.report?'Nova analiza':'Analiziraj tjedan')}</button></section>`;
}
async function mkReport(){
 busy.report=true; render();
 try{const a=weekStats(0),b=weekStats(1);
  aiBusy(true); const r=await sampleNS(`Ti si osobni trener i nutricionist. Napiši kratak tjedni izvještaj na hrvatskom (do 180 riječi, bez markdown naslova): 1) što je bilo dobro, 2) što popraviti, 3) tri konkretne promjene za idući tjedan.
Ovaj tjedan: ${JSON.stringify(a)}
Prošli tjedan: ${JSON.stringify(b)}
${ctxBlock()}`,{maxTokens:700});
  S.report={date:dk(),text:r.text}; save();
 }catch(e){toast(aiErr(e))}
 aiBusy(false); busy.report=false; render();
}

/* ---------- status: stress, illness, travel, flight, jetlag ---------- */
const SICK={prehlada:'Prehlada',gripa:'Gripa / temperatura',zeludac:'Želučane tegobe'};
const addDays=(d,n)=>{const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+n);return dk(x)};
const daysBetween=(a,b)=>Math.round((new Date(b+'T12:00')-new Date(a+'T12:00'))/864e5);
function activeStatus(){
 const s=S.status||{},o={},t=dk();
 if(s.stress?.level) o.stress=s.stress;
 if(s.sick?.type) o.sick=s.sick;
 if(s.travel?.city&&(!s.travel.until||s.travel.until>=t)) o.travel=s.travel;
 if(s.flight?.date&&daysBetween(t,s.flight.date)>=0&&daysBetween(t,s.flight.date)<=2) o.flight=s.flight;
 let jl=s.jetlag;
 if(!jl&&s.flight?.date&&Math.abs(+s.flight.shift||0)>=3) jl={shift:+s.flight.shift,start:s.flight.date,auto:true};
 if(jl&&t>=jl.start&&daysBetween(jl.start,t)<Math.max(2,Math.ceil(Math.abs(jl.shift)*0.8))) o.jetlag={...jl,day:daysBetween(jl.start,t)+1};
 return o;
}
function statusSummary(){
 const o=activeStatus(),a=[];
 if(o.sick) a.push('bolest: '+SICK[o.sick.type]);
 if(o.stress) a.push('stres '+o.stress.level+'/5');
 if(o.travel) a.push('poslovni put u '+o.travel.city+(o.travel.gym?' (hotel ima teretanu)':' (bez teretane)'));
 if(o.flight) a.push(`let ${o.flight.date} u ${o.flight.depart||'?'}, ${o.flight.hours||'?'} h, ${o.flight.dest||''}, vremenska razlika ${o.flight.shift>0?'+':''}${o.flight.shift||0} h`);
 if(o.jetlag) a.push(`jetlag dan ${o.jetlag.day}, pomak ${o.jetlag.shift>0?'+':''}${o.jetlag.shift} h (${o.jetlag.shift>0?'prema istoku':'prema zapadu'})`);
 return a.join('; ');
}
function adaptWorkout(w0){
 const o=activeStatus(); if(!Object.keys(o).length) return w0;
 let w=JSON.parse(JSON.stringify(w0)); const why=[]; const p=S.profile;
 if(o.sick&&o.sick.type!=='prehlada'){
  return {...w,title:'Odmor i oporavak',focus:SICK[o.sick.type],minutes:10,adapted:SICK[o.sick.type],warmup:[],
   exercises:[{name:'Odmor',sets:1,reps:'cijeli dan',rest:'—',tip:'tijelo troši energiju na oporavak'},{name:'Disanje 4-7-8',sets:3,reps:'ciklusa',rest:'—',tip:'udah 4, zadrži 7, izdah 8'},{name:'Lagano istezanje u krevetu',sets:1,reps:'5 min',rest:'—',tip:'samo ako ti godi'}],
   cooldown:[],note:'S temperaturom ili simptomima ispod vrata (prsa, mišići, želudac) ne treniraj. Vrati se postupno, 1–2 dana nakon što prođe temperatura, s pola uobičajenog opterećenja.'};
 }
 if(o.sick){
  return {...w,title:'Lagani dan — prehlada',focus:'Do 50 % intenziteta',minutes:25,adapted:'prehlada',warmup:['3 min hoda'],
   exercises:[{name:'Šetnja na zraku',sets:1,reps:'20–30 min',rest:'—',tip:'lagan tempo, možeš pričati'},{name:'Mačka-krava',sets:2,reps:'10',rest:'—',tip:''},{name:'Otvaranje kukova 90/90',sets:2,reps:'6 / strana',rest:'—',tip:''},{name:'Čučanj bez težine',sets:2,reps:'10',rest:'60 s',tip:'samo ako se osjećaš dobro'}],
   cooldown:['Topli tuš i rano u krevet'],note:'Pravilo "iznad vrata": ako su simptomi samo curenje nosa ili grlo, lagano kretanje je u redu. Ako se pogorša, prestani i odmori se.'};
 }
 if(o.flight&&o.flight.date===dk()){
  return {...w,title:'Dan leta',focus:'Cirkulacija i ukočenost',minutes:15,adapted:'let',warmup:['Prije polaska: 10 min brzog hoda po aerodromu'],
   exercises:[{name:'Kruženje gležnjevima',sets:3,reps:'15 / smjer',rest:'svaki sat',tip:'u sjedalu'},{name:'Podizanje na prste',sets:3,reps:'20',rest:'svaki sat',tip:'u sjedalu ili kod toaleta'},{name:'Kruženje ramenima i vratom',sets:2,reps:'10',rest:'—',tip:''},{name:'Šetnja prolazom',sets:1,reps:'2–3 min',rest:'svakih 60–90 min',tip:'smanjuje rizik od tromboze'},{name:'Nakon slijetanja: šetnja na danjem svjetlu',sets:1,reps:'15–20 min',rest:'—',tip:'pomaže satu u tijelu'}],
   cooldown:[],note:'Nakon leta dulje od 4 h ne radi težak trening isti dan.'};
 }
 if(o.jetlag&&o.jetlag.day<=2){
  const east=o.jetlag.shift>0;
  return {...w,title:'Jetlag — lagani trening',focus:`Dan ${o.jetlag.day} prilagodbe`,minutes:25,adapted:'jetlag',warmup:['5 min hoda'],
   exercises:[{name:`Šetnja vani ${east?'ujutro':'poslijepodne'}`,sets:1,reps:'20–30 min',rest:'—',tip:east?'jutarnje svjetlo pomiče sat ranije':'popodnevno svjetlo pomiče sat kasnije'},
    {name:'Čučanj',sets:2,reps:'12',rest:'60 s',tip:''},{name:'Sklekovi',sets:2,reps:'8–12',rest:'60 s',tip:''},{name:'Glute bridge',sets:2,reps:'15',rest:'45 s',tip:''},{name:'Plank',sets:2,reps:'30 s',rest:'45 s',tip:''}],
   cooldown:['Istezanje 5 min'],note:'Treniraj u vrijeme kad bi po lokalnom vremenu trebao biti budan, nikako kasno navečer. Težak trening vrati od 3. dana.'};
 }
 if(o.travel){
  const save0={gym:p.gym,minutes:p.minutes}; p.gym=o.travel.gym?'basic':'none'; p.minutes=Math.min(p.minutes,30);
  try{ w=genWorkout(dk()) } finally { Object.assign(p,save0) }
  w.focus=o.travel.gym?'Hotelska teretana':'Hotelska soba, bez opreme'; why.push('poslovni put');
  w.note='Na putu je cilj održati formu, ne napredovati. 25–30 min kruga je dovoljno; dodaj šetnju umjesto taksija gdje možeš.';
 }
 if(o.jetlag&&o.jetlag.day>2){ w.exercises.forEach(e=>{if(typeof e.sets==='number')e.sets=Math.max(2,e.sets-1)}); why.push('kraj jetlaga'); }
 if(o.stress&&o.stress.level>=4){
  const hard=/burpee|high knees|mountain|intervali|skakanje/i;
  w.exercises=w.exercises.filter(e=>!hard.test(e.name)).map(e=>({...e,sets:typeof e.sets==='number'?Math.max(2,e.sets-1):e.sets,rest:'90 s'}));
  w.exercises.push({name:'Box disanje',sets:1,reps:'2 min',rest:'—',tip:'4 s udah, 4 zadrži, 4 izdah, 4 zadrži'});
  w.minutes=Math.min(w.minutes,35); why.push('visok stres');
  w.note='Kod jakog stresa umjereni trening pomaže, a iscrpljujući dodatno opterećuje. Manje serija, dulji odmor, bez intervala.';
 } else if(o.stress&&o.stress.level>=2){ w.cooldown=[...(w.cooldown||[]),'2 min box disanja']; why.push('stres'); }
 if(why.length) w.adapted=why.join(', ');
 return w;
}
function statusTips(){
 const o=activeStatus(),T=[];
 if(o.sick?.type==='prehlada') T.push(['Prehlada','Topla juha s piletinom, puno tekućine, vitamin C (paprika, kivi, naranča) i cink (govedina, bučine sjemenke). Ne smanjuj kalorije dok si bolestan.']);
 if(o.sick?.type==='gripa') T.push(['Gripa / temperatura','Odmor, voda i čaj u malim gutljajima, juhe, lako probavljivi proteini (jaja, jogurt, piletina). Javi se liječniku ako je temperatura iznad 39 °C, traje dulje od 3 dana, ili imaš otežano disanje ili bol u prsima.']);
 if(o.sick?.type==='zeludac') T.push(['Želučane tegobe','Mali gutljaji vode ili otopine za rehidraciju, zatim riža, banana, tost, bistra juha. Proteini kad prođe mučnina: kuhana piletina, jaja. Liječnik ako ne zadržavaš tekućinu više od dana ili vidiš krv.']);
 if(o.stress){ T.push(['Stres '+o.stress.level+'/5','Magnezij (bučine sjemenke, bademi, tamna čokolada), omega-3 (losos, sardine), složeni ugljikohidrati navečer za bolji san. Kofein samo do 14 h, alkohol izbjegavaj. Redoviti obroci s proteinima drže energiju stabilnom.']); if(o.stress.level>=4) T.push(['Danas','Ako se stres ne smiruje danima ili utječe na san i svakodnevicu, razgovaraj s nekim kome vjeruješ ili sa stručnjakom.']); }
 if(o.travel) T.push(['Poslovni put — '+o.travel.city,'Hotelski doručak: jaja, jogurt, sir, šunka; preskoči peciva. Na sastancima: voda umjesto treće kave. U torbi drži proteinski snack (štapić, orašasti, jerky). Za večeru vidi Restorane.']);
 if(o.flight) T.push(['Let','Spakiraj praznu bocu (napuni nakon kontrole) i proteinske snackove. 250 ml vode po satu leta, bez alkohola. Ustani svakih 60–90 min. Od ukrcaja jedi i spavaj po vremenu odredišta.']);
 if(o.jetlag) T.push(['Jetlag dan '+o.jetlag.day,o.jetlag.shift>0?'Putovao si prema istoku: traži jutarnje svjetlo, izbjegavaj jako svjetlo navečer, lezi po lokalnom vremenu. Doručak s proteinima odmah ujutro pomaže satu.':'Putovao si prema zapadu: budi vani poslijepodne i navečer, ostani budan do barem 21 h lokalno. Ujutro prvih dana izbjegavaj jako svjetlo.']);
 return T;
}
function jetlagPlan(shift,start){
 const n=Math.max(2,Math.min(7,Math.ceil(Math.abs(shift)*0.8))),east=shift>0,rows=[];
 for(let i=0;i<n;i++){const left=Math.max(0,Math.round((Math.abs(shift)-i*1.2)*10)/10);
  rows.push({d:addDays(start,i),left,light:east?(i<2&&Math.abs(shift)>=8?'kasno jutro (10–12 h)':'jutro, odmah nakon buđenja'):(i<2&&Math.abs(shift)>=8?'rano poslijepodne':'kasno poslijepodne i predvečer'),
   avoid:east?'jako svjetlo nakon 18 h':'jako svjetlo prije 10 h',train:i<2?'lagano, 20–30 min':i<4?'umjereno':'normalno'})}
 return rows;
}
let breathTimer=null;
function breathe(){
 const el=$('#breath'); if(!el) return; clearInterval(breathTimer);
 const ph=['Udahni','Zadrži','Izdahni','Zadrži']; let i=0,sec=0,total=0;
 el.hidden=false; const lab=el.querySelector('b'),ring=el.querySelector('i');
 const tick=()=>{ if(total>=120){clearInterval(breathTimer);lab.textContent='Gotovo';ring.style.transform='scale(.7)';return}
  if(sec===0){lab.textContent=ph[i%4]; ring.style.transform=i%4===0?'scale(1)':i%4===2?'scale(.6)':ring.style.transform}
  sec++; total++; if(sec===4){sec=0;i++} };
 tick(); breathTimer=setInterval(tick,1000);
}
function statusStrip(){
 const o=activeStatus(),k=Object.keys(o);
 if(k.length) return `<div class="banner" data-go="stanje" style="cursor:pointer">${ic('pulse')}<span><b>Prilagođeno:</b> ${esc(statusSummary())}</span></div>`;
 return `<div class="row"><span class="small muted">Kako si danas?</span><div class="seg"><button class="chip" data-act="qstress">Pod stresom</button><button class="chip" data-act="qsick">Bolestan</button><button class="chip" data-go="stanje">Putujem</button></div></div>`;
}
function vStanje(){
 const s=S.status||{},o=activeStatus(),T=statusTips(),fl=s.flight||{},tr=s.travel||{};
 const jl=o.jetlag||(s.jetlag?{...s.jetlag,day:0}:null);
 return `<div><h1>Stanje</h1><p class="muted">Reci kako si i gdje si. Trening, ciljevi, voda, prehrana i savjeti asistenta prilagode se automatski.</p></div>
 ${Object.keys(o).length?`<section class="card hero"><span class="eyebrow">Trenutno aktivno</span><p>${esc(statusSummary())}</p><button class="btn sm ghost" data-act="stclear" style="color:inherit;border-color:currentColor;align-self:flex-start">Sve je normalno</button></section>`:''}
 ${T.length?`<section class="card"><h3>Što sada</h3>${T.map(([h,t])=>`<div class="gapitem"><div class="lbl">${esc(h)}</div><div class="food">${esc(t)}</div></div>`).join('')}
  <button class="btn dark" data-act="stai" ${sampleReady?'':'disabled'}>${ic('spark')}Napravi mi plan za danas</button></section>`:''}

 <section class="card"><h3>Stres</h3><div class="seg"><button class="chip ${!s.stress?.level?'on':''}" data-act="stress" data-v="0">Nisam pod stresom</button>${[2,3,4,5].map(l=>`<button class="chip ${s.stress?.level===l?'on':''}" data-act="stress" data-v="${l}">${['','','Malo','Srednje','Jako','Na rubu'][l]}</button>`).join('')}</div>
  <button class="btn ghost" data-act="breathe">${ic('pulse')}Disanje 2 min</button>
  <div id="breath" hidden style="display:grid;place-items:center;gap:8px;padding:10px"><div style="width:150px;height:150px;display:grid;place-items:center;position:relative"><i style="position:absolute;inset:0;border-radius:50%;background:var(--accent-soft);border:2px solid var(--accent);transform:scale(.6);transition:transform 4s ease-in-out"></i><b style="position:relative;font-family:var(--f-display);font-size:1.2rem">Spremi se</b></div><span class="small muted">4 s po fazi</span></div></section>

 <section class="card"><h3>Zdravlje</h3><div class="seg"><button class="chip ${!s.sick?.type?'on':''}" data-act="sick" data-v="">Zdrav sam</button>${Object.entries(SICK).map(([k,v])=>`<button class="chip ${s.sick?.type===k?'on':''}" data-act="sick" data-v="${k}">${v}</button>`).join('')}</div>
  ${o.sick?`<p class="small muted">Bolestan od ${esc(s.sick.since)}. Kad ti bude bolje, klikni "Zdrav sam".</p>`:''}</section>

 <section class="card"><h3>Poslovni put</h3><div class="grid2"><label class="f">Grad<input type="text" id="tc" value="${esc(tr.city||'')}" placeholder="npr. München"></label><label class="f">Do datuma<input type="date" id="tu" value="${esc(tr.until||'')}"></label></div>
  <label class="row small" style="font-weight:600"><input type="checkbox" id="tg" ${tr.gym?'checked':''}> Hotel ima teretanu</label>
  <div class="row"><button class="btn primary" data-act="travelsave">${o.travel?'Ažuriraj':'Krećem na put'}</button>${o.travel?'<button class="btn ghost" data-act="travelend">Vratio sam se</button><button class="btn ghost" data-act="travelrest">'+ic('fork')+'Restorani tamo</button>':''}</div></section>

 <section class="card"><div class="row between"><h3>Let</h3>${ic('plane').replace('<svg','<svg width="22" height="22"')}</div>
  <div class="grid2"><label class="f">Datum<input type="date" id="fd" value="${esc(fl.date||'')}"></label><label class="f">Polazak<input type="time" id="fdep" value="${esc(fl.depart||'')}"></label>
  <label class="f">Trajanje (h)<input type="number" id="fh" step="0.5" value="${esc(fl.hours||'')}" inputmode="decimal"></label><label class="f">Vremenska razlika<select id="fs">${[-12,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11].map(h=>`<option value="${h}" ${(+fl.shift||0)===h?'selected':''}>${h>0?'+':''}${h} h ${h>0?'(istok)':h<0?'(zapad)':''}</option>`).join('')}</select></label></div>
  <label class="f">Odredište<input type="text" id="fdst" value="${esc(fl.dest||'')}" placeholder="npr. New York"></label>
  <div class="row"><button class="btn primary" data-act="flightsave">Spremi let</button>${s.flight?'<button class="btn ghost" data-act="flightclear">Makni let</button>':''}</div>
  ${s.flight&&daysBetween(dk(),s.flight.date)>0&&Math.abs(+s.flight.shift)>=3?`<div class="banner">${ic('bulb')}<span>Do leta ${daysBetween(dk(),s.flight.date)} d. ${+s.flight.shift>0?'Zadnja 2–3 dana lezi i ustaj 1 h ranije svaki dan':'Zadnja 2–3 dana lezi i ustaj 1 h kasnije svaki dan'}, tako stižeš djelomično prilagođen.</span></div>`:''}</section>

 <section class="card"><h3>Jetlag</h3>${jl?`<p class="small muted">Pomak ${jl.shift>0?'+':''}${jl.shift} h, od ${esc(jl.start)}${jl.auto?' (iz leta)':''}.${o.jetlag?' Danas je dan '+o.jetlag.day+'.':''}</p>
  <div class="tbl-wrap"><table><tr><th>Dan</th><th>Svjetlo</th><th>Izbjegavaj</th><th>Trening</th></tr>${jetlagPlan(jl.shift,jl.start).map(r=>`<tr style="${r.d===dk()?'background:var(--accent-soft)':''}"><td class="num">${r.d.slice(8)}.${r.d.slice(5,7)}.</td><td>${r.light}</td><td>${r.avoid}</td><td>${r.train}</td></tr>`).join('')}</table></div>
  <p class="small muted">Spavaj i jedi po lokalnom vremenu od prvog dana. Kratko drijemanje do 20 min prije 15 h je u redu. O melatoninu se posavjetuj s ljekarnikom.</p>
  ${s.jetlag?'<button class="btn sm ghost" data-act="jetclear">Makni jetlag</button>':''}`
  :`<p class="small muted">Plan se napravi sam kad spremiš let s razlikom od 3 h ili više. Ili ga upiši ručno:</p>
  <div class="row" style="align-items:stretch"><select id="js" style="width:140px">${[-9,-6,-3,3,6,9].map(h=>`<option value="${h}">${h>0?'+':''}${h} h</option>`).join('')}</select><button class="btn dark" data-act="jetsave">Imam jetlag od danas</button></div>`}</section>`;
}

/* ---------- health integrations ---------- */
function activityBonus(){const h=S.health?.[dk()];if(!h?.activeKcal||h.activeKcal<=350)return 0;return Math.min(600,Math.round((Math.min(h.activeKcal,1500)-350)*0.6/10)*10)}
function healthLine(){const h=S.health?.[dk()]||{};const st=[];for(let i=0;i<7;i++){const v=S.health?.[addDays(dk(),-i)]?.steps;if(v!=null)st.push(v)}
 const p=[];if(h.steps!=null)p.push('koraci danas '+r0(h.steps));if(h.activeKcal)p.push('aktivne kcal '+r0(h.activeKcal));if(h.distKm)p.push(r1(h.distKm)+' km');if(h.restHR)p.push('puls u mirovanju '+r0(h.restHR));if(h.workoutMin)p.push('trening '+r0(h.workoutMin)+' min');
 if(st.length)p.push('prosjek koraka 7 d '+r0(st.reduce((a,b)=>a+b,0)/st.length));return p.join(', ')||'nema podataka'}
function mergeHealth(days,src){
 let n=0,lastW=null;
 for(const [d,v] of Object.entries(days)){
  const cur=S.health[d]||{};
  for(const k of ['steps','activeKcal','distKm','restHR','workoutMin','workouts']) if(v[k]!=null&&!isNaN(v[k])) cur[k]=Math.round(v[k]*10)/10;
  cur.src=src; S.health[d]=cur; n++;
  if(v.sleepH&&v.sleepH>1&&v.sleepH<16&&!S.sleep[d]?.bed) S.sleep[d]={...(S.sleep[d]||{}),hours:r1(v.sleepH),src};
  if(v.weight&&v.weight>25&&v.weight<300){ S.weights=S.weights.filter(x=>x.d!==d); S.weights.push({d,kg:r1(v.weight)}); if(!lastW||d>lastW.d) lastW={d,kg:r1(v.weight)} }
 }
 if(lastW){ const newest=[...S.weights].sort((a,b)=>b.d.localeCompare(a.d))[0]; S.profile.weight=newest.kg }
 const keys=Object.keys(S.health).sort(); if(keys.length>400) keys.slice(0,keys.length-400).forEach(k=>delete S.health[k]);
 S.lastSync={src,at:new Date().toISOString(),days:n}; save(); return n;
}
const num=x=>{if(x==null)return null;const v=parseFloat(String(x).replace(/\s/g,'').replace(',', '.'));return isNaN(v)?null:v};
/* Shortcut / paste format: LIFESTYLE;date=2026-10-23;steps=8450;kcal=520;km=6.1;sleep=7.2;weight=81.4;hr=58;workout=35 */
function parseShortcut(txt){
 const i=txt.indexOf('LIFESTYLE'); if(i<0) return null;
 const parts=txt.slice(i+9).split(/[;\n|&]+/); const o={};
 parts.forEach(p=>{const m=p.match(/^\s*([a-zčćšđž_]+)\s*[=:]\s*(.+?)\s*$/i); if(m) o[m[1].toLowerCase()]=m[2]});
 let d=o.date||o.datum||dk(); const dm=d.match(/(\d{4})-(\d{2})-(\d{2})/)||null; if(dm) d=dm[0]; else{const e=d.match(/(\d{1,2})\.\s?(\d{1,2})\.\s?(\d{4})/); d=e?`${e[3]}-${e[2].padStart(2,'0')}-${e[1].padStart(2,'0')}`:dk()}
 let sl=num(o.sleep??o.san); if(sl>24) sl=sl/(sl>1440?3600:60);
 return {[d]:{steps:num(o.steps??o.koraci),activeKcal:num(o.kcal??o.aktivne),distKm:num(o.km),sleepH:sl,weight:num(o.weight??o.tezina),restHR:num(o.hr??o.puls),workoutMin:num(o.workout??o.trening)}};
}
function importShortcutText(txt){
 const r=parseShortcut(txt); if(!r){toast('U tekstu nema LIFESTYLE podataka. Provjeri prečac.');return false}
 const n=mergeHealth(r,'Apple Health (prečac)'); render(); toast('Uvezeni podaci iz Healtha'); return n;
}
/* Apple Health export.zip / export.xml, streamed */
let hImport=null;
function loadScript(src){return new Promise((res,rej)=>{if([...document.scripts].some(s=>s.src===src))return res();const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error('Ne mogu učitati '+src.split('/').pop()));document.head.appendChild(s)})}
async function importAppleExport(file){
 hImport={pct:0,msg:'Otvaram datoteku…'}; render();
 const cutoff=addDays(dk(),-120), acc={}, sleep={}, hr={}, wt={}, wo={};
 const add=(o,d,k,src,v)=>{o[d]=o[d]||{};o[d][k]=o[d][k]||{};o[d][k][src]=(o[d][k][src]||0)+v};
 const reAttr=/(\w+)="([^"]*)"/g;
 const toISO=s=>s.replace(' ','T').replace(/ ([+-]\d{2})(\d{2})$/,'$1:$2');
 const TYPES={HKQuantityTypeIdentifierStepCount:'steps',HKQuantityTypeIdentifierActiveEnergyBurned:'activeKcal',HKQuantityTypeIdentifierDistanceWalkingRunning:'distKm'};
 let tail='', recs=0;
 const handle=chunk=>{
  const s=tail+chunk, last=s.lastIndexOf('>'); if(last<0){tail=s;return}
  const body=s.slice(0,last+1); tail=s.slice(last+1);
  const re=/<(Record|Workout)\s([^>]*)>/g; let m;
  while((m=re.exec(body))){
   const a={}; let x; reAttr.lastIndex=0; while((x=reAttr.exec(m[2]))) a[x[1]]=x[2];
   const sd=(a.startDate||'').slice(0,10); if(!sd||sd<cutoff) continue; recs++;
   if(m[1]==='Workout'){ let mins=+a.duration||0; if(a.durationUnit==='s')mins/=60; if(a.durationUnit==='hr')mins*=60; wo[sd]=wo[sd]||{min:0,n:0}; wo[sd].min+=mins; wo[sd].n++; continue }
   const t=a.type, v=parseFloat(a.value), src=a.sourceName||'?';
   if(TYPES[t]&&!isNaN(v)){ let val=v; if(TYPES[t]==='distKm'&&a.unit==='mi')val*=1.609; if(TYPES[t]==='distKm'&&a.unit==='m')val/=1000; if(TYPES[t]==='activeKcal'&&a.unit==='kJ')val/=4.184; add(acc,sd,TYPES[t],src,val) }
   else if(t==='HKQuantityTypeIdentifierRestingHeartRate'&&!isNaN(v)){ (hr[sd]=hr[sd]||[]).push(v) }
   else if(t==='HKQuantityTypeIdentifierBodyMass'&&!isNaN(v)){ wt[sd]=a.unit==='lb'?v*0.4536:v }
   else if(t==='HKCategoryTypeIdentifierSleepAnalysis'&&/Asleep/.test(a.value||'')){ const ed=(a.endDate||'').slice(0,10); const h=(new Date(toISO(a.endDate))-new Date(toISO(a.startDate)))/36e5; if(h>0&&h<16) add(sleep,ed,'h',src,h) }
  }
 };
 try{
  let total=file.size, done=0;
  const isZip=/\.zip$/i.test(file.name)||file.type.includes('zip');
  if(isZip){
   hImport={pct:2,msg:'Učitavam ZIP…'}; render();
   await loadScript(new URL('vendor/jszip.min.js',location.href).href);
   const zip=await JSZip.loadAsync(file);
   const entry=Object.values(zip.files).find(f=>/(^|\/)export\.xml$/.test(f.name));
   if(!entry) throw new Error('U ZIP-u nema export.xml. Je li to izvoz iz aplikacije Zdravlje?');
   total=entry._data?.uncompressedSize||0;
   const dec=new TextDecoder();
   await new Promise((res,rej)=>{ entry.internalStream('uint8array').on('data',(d,meta)=>{done+=d.length;handle(dec.decode(d,{stream:true}));const pct=Math.round(meta.percent||done/total*100);if(pct!==hImport.pct){hImport={pct,msg:`Čitam zapise… ${recs.toLocaleString('hr-HR')}`};const el=$('#himp');if(el)el.innerHTML=impHTML()}}).on('error',rej).on('end',res).resume() });
  } else {
   const reader=file.stream().getReader(), dec=new TextDecoder();
   for(;;){ const {done:fin,value}=await reader.read(); if(fin)break; done+=value.length; handle(dec.decode(value,{stream:true})); const pct=Math.round(done/total*100); if(pct!==hImport.pct){hImport={pct,msg:`Čitam zapise… ${recs.toLocaleString('hr-HR')}`};const el=$('#himp');if(el)el.innerHTML=impHTML()} }
  }
  const days={}; const pickMax=o=>Math.max(...Object.values(o)); // iPhone + sat broje iste korake, uzmi izvor s najviše
  const allDays=new Set([...Object.keys(acc),...Object.keys(sleep),...Object.keys(hr),...Object.keys(wt),...Object.keys(wo)]);
  allDays.forEach(d=>{ if(d<cutoff) return; const v={};
   if(acc[d]) for(const k in acc[d]) v[k]=pickMax(acc[d][k]);
   if(sleep[d]) v.sleepH=pickMax(sleep[d].h);
   if(hr[d]) v.restHR=hr[d].reduce((a,b)=>a+b,0)/hr[d].length;
   if(wt[d]) v.weight=wt[d];
   if(wo[d]){v.workoutMin=wo[d].min;v.workouts=wo[d].n}
   days[d]=v });
  const n=mergeHealth(days,'Apple Health (izvoz)');
  hImport=null; render(); toast(`Uvezeno ${n} dana iz Apple Healtha`);
 }catch(e){ hImport={error:(e&&e.message)||'Uvoz nije uspio'}; render() }
}
function impHTML(){ if(!hImport) return ''; if(hImport.error) return `<p style="color:var(--bad)">${esc(hImport.error)}</p>`;
 return `<div class="small muted">${esc(hImport.msg)}</div><div class="bar" style="color:var(--accent)"><i style="width:${hImport.pct}%"></i></div>` }
/* Generic CSV: Google Fit (Takeout), Samsung Health, Garmin, Fitbit, Oura, Withings… */
function parseCSV(text){
 const first=text.split(/\r?\n/,1)[0]; const delim=(first.match(/;/g)||[]).length>(first.match(/,/g)||[]).length?';':',';
 const rows=[]; let row=[],cell='',q=false;
 for(let i=0;i<text.length;i++){const c=text[i];
  if(q){ if(c==='"'&&text[i+1]==='"'){cell+='"';i++} else if(c==='"') q=false; else cell+=c }
  else if(c==='"') q=true; else if(c===delim){row.push(cell);cell=''} else if(c==='\n'||c==='\r'){ if(c==='\r'&&text[i+1]==='\n')i++; row.push(cell);rows.push(row);row=[];cell='' } else cell+=c }
 if(cell||row.length){row.push(cell);rows.push(row)}
 return rows.filter(r=>r.some(x=>x.trim()));
}
function normDate(s){ s=String(s||'').trim(); let m=s.match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/); if(m) return `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
 m=s.match(/(\d{1,2})\.\s?(\d{1,2})\.\s?(\d{4})/); if(m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
 m=s.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/); if(m) return `${m[3]}-${m[1].padStart(2,'0')}-${m[2].padStart(2,'0')}`; return null }
function importCSV(text,name){
 const rows=parseCSV(text); if(rows.length<2) throw new Error('CSV je prazan.');
 const H=rows[0].map(h=>h.trim().toLowerCase());
 const find=re=>H.findIndex(h=>re.test(h));
 const iD=find(/^(date|datum|day|dan|calendar date|start time|timestamp)|date/);
 if(iD<0) throw new Error('Nisam našao stupac s datumom.');
 const cols={steps:find(/step|korac|koraci/),activeKcal:find(/active.*(cal|energy)|aktivn.*kal|move calories/),distKm:find(/distance|udaljen/),
  sleepH:find(/sleep|^san|spavan/),weight:find(/weight|težin|tezin|body mass/),restHR:find(/resting.*(heart|hr|pulse)|mirovanj|rhr/),workoutMin:find(/move minutes|active minutes|exercise|aktivne minute/)};
 const found=Object.entries(cols).filter(([,i])=>i>=0).map(([k])=>k); if(!found.length) throw new Error('Nisam prepoznao stupce (koraci, san, težina, puls…).');
 const days={};
 rows.slice(1).forEach(r=>{ const d=normDate(r[iD]); if(!d) return; const v=days[d]=days[d]||{};
  for(const [k,i] of Object.entries(cols)){ if(i<0) continue; let x=num(r[i]); if(x==null) continue; const h=H[i];
   if(k==='distKm'){ if(/\(m\)|meters|metri/.test(h))x/=1000; else if(/mi/.test(h)&&!/min/.test(h))x*=1.609 }
   if(k==='sleepH'){ if(/min/.test(h)||x>24)x/=60 }
   if(k==='weight'&&/lb/.test(h))x*=0.4536;
   v[k]=k==='weight'||k==='restHR'?x:(v[k]||0)+x } });
 return {n:mergeHealth(days,name),found};
}
function vPovezivanje(){
 const ls=S.lastSync, tok='LIFESTYLE;date=[datum];steps=[koraci];kcal=[aktivne kcal];km=[km];sleep=[san h];weight=[težina];hr=[puls]';
 return `<div><h1>Povezivanje</h1><p class="muted">Koraci, san, aktivne kalorije, puls, težina i treninzi iz Apple Healtha i drugih aplikacija.</p></div>
 ${ls?`<section class="card flat"><div class="row">${ic('check')}<span class="small">Zadnji uvoz: <b>${esc(ls.src)}</b>, ${esc(ls.days)} dana · ${new Date(ls.at).toLocaleString('hr-HR')}</span></div></section>`:''}
 <section class="card"><div class="row between"><h3>Što uvezeni podaci mijenjaju</h3></div>
  <ol class="steps"><li>Aktivne kalorije iznad 350 kcal podižu dnevni kalorijski cilj.</li><li>San i težina automatski ulaze u San i Napredak.</li><li>Treninzi sa sata (Strava, Garmin, Apple Watch…) nude se kao odrađeni trening.</li><li>Asistent vidi korake, puls i aktivnost pa savjetuje prema tome.</li></ol></section>

 <section class="card"><div class="row between"><h3>Apple Health: prečac jednim dodirom</h3><span class="pill accent">iPhone · preporučeno</span></div>
  <p class="small muted">Health je središte: Apple Watch, Strava, Garmin Connect, Oura, Withings, MyFitnessPal i većina drugih aplikacija upisuju podatke u Health, pa ih ovaj prečac sve pokupi. Web aplikacija ne može sama čitati Health, pa podatke prenosi prečac.</p>
  <details><summary>Kako napraviti prečac (5 min, jednom)</summary><ol class="steps">
   <li>Otvori aplikaciju <b>Prečaci</b> → <b>+</b> → nazovi ga "Lifestyle sync".</li>
   <li>Dodaj <b>Pronađi zdravstvene uzorke</b>: vrsta <i>Koraci</i>, datum početka <i>danas</i>. Pa <b>Izračunaj statistiku → Zbroj</b>.</li>
   <li>Ponovi za <i>Aktivna energija</i> i <i>Udaljenost hodanja i trčanja</i> (zbroj).</li>
   <li>Za san: <i>Analiza spavanja</i>, zadnjih 1 dan, vrijednost <i>Spavanje</i> → <b>Dohvati detalje: Trajanje</b> → <b>Zbroj</b>. Ako ti trajanje vrati u minutama, aplikacija ga sama pretvori u sate.</li>
   <li>Za <i>Težina</i> i <i>Puls u mirovanju</i>: sortiraj po datumu, ograniči na 1 uzorak.</li>
   <li>Dodaj radnju <b>Tekst</b> i složi ga točno ovako, zamijenivši zagrade varijablama:<div class="row" style="margin-top:6px;align-items:stretch"><code id="tok" style="flex:1;min-width:0;overflow-wrap:anywhere;background:var(--surface-2);padding:8px;border-radius:8px;font-size:.78rem">${esc(tok)}</code><button class="btn sm ghost" data-act="copytok">Kopiraj</button></div></li>
   <li>Dodaj <b>Kodiraj URL</b> (URL Encode) na taj tekst, pa <b>Otvori URL</b> s adresom:<div class="row" style="margin-top:6px;align-items:stretch"><code id="syncurl" style="flex:1;min-width:0;overflow-wrap:anywhere;background:var(--surface-2);padding:8px;border-radius:8px;font-size:.78rem">${esc(baseURL())}#sync=[kodirani tekst]</code><button class="btn sm ghost" data-act="copysync">Kopiraj</button></div>Lifestyle se otvori i sam uveze podatke. Bez lijepljenja.</li>
   <li>Opcija: <b>Automatizacija → Doba dana 21:30 → Pokreni odmah</b>, pa se pokreće sam svaku večer.</li></ol></details>
  <label class="f">Ili zalijepi tekst ručno<textarea id="hpaste" placeholder="LIFESTYLE;date=2026-10-23;steps=8450;kcal=520;sleep=7.2…"></textarea></label>
  <button class="btn primary" data-act="hpaste">${ic('heart')}Uvezi</button></section>

 <section class="card"><div class="row between"><h3>Apple Health: cijeli izvoz</h3><span class="pill">jednom, za povijest</span></div>
  <p class="small muted">Zdravlje → tvoja slika profila → <b>Izvezi sve zdravstvene podatke</b>. Dobiješ <b>export.zip</b>; odaberi ga ovdje. Uvozi se zadnjih 120 dana. Velik izvoz je lakše učitati na računalu.</p>
  <input type="file" id="hfile" accept=".zip,.xml,application/zip,text/xml" hidden>
  <button class="btn dark" data-act="hfile" ${hImport&&!hImport.error?'disabled':''}>${ic('heart')}Odaberi export.zip</button>
  <div id="himp" class="stack">${impHTML()}</div></section>

 <section class="card"><div class="row between"><h3>Android i ostale aplikacije</h3><span class="pill">CSV</span></div>
  <div class="list">
   <div class="li"><div class="grow"><div class="t">Google Fit</div><div class="small muted">takeout.google.com → Fit → u ZIP-u "Daily activity metrics.csv"</div></div></div>
   <div class="li"><div class="grow"><div class="t">Samsung Health</div><div class="small muted">Postavke → Preuzmi osobne podatke → CSV datoteke (koraci, san, težina)</div></div></div>
   <div class="li"><div class="grow"><div class="t">Garmin Connect</div><div class="small muted">Web → Izvješća ili Aktivnosti → Izvoz CSV</div></div></div>
   <div class="li"><div class="grow"><div class="t">Fitbit, Oura, Withings, Polar, Whoop</div><div class="small muted">Izvoz podataka u CSV iz postavki računa</div></div></div>
  </div>
  <p class="small muted">Prepoznajem stupce za datum, korake, kalorije, udaljenost, san, težinu i puls na engleskom i hrvatskom. Health Connect na Androidu još nema izvoz u datoteku; koristi Google Fit ili aplikaciju proizvođača sata.</p>
  <input type="file" id="cfile" accept=".csv,text/csv" multiple hidden>
  <button class="btn dark" data-act="cfile">Odaberi CSV</button></section>

 <section class="card"><h3>Uvezeno zadnjih 7 dana</h3><div class="tbl-wrap"><table><tr><th>Dan</th><th class="r">Koraci</th><th class="r">Akt. kcal</th><th class="r">San</th><th class="r">Puls</th><th class="r">Trening</th></tr>
  ${Array.from({length:7},(_,i)=>addDays(dk(),-i)).map(d=>{const h=S.health[d]||{},z=S.sleep[d];return `<tr><td class="num">${d.slice(8)}.${d.slice(5,7)}.</td><td class="r">${h.steps!=null?r0(h.steps).toLocaleString('hr-HR'):'—'}</td><td class="r">${h.activeKcal?r0(h.activeKcal):'—'}</td><td class="r">${z?.hours?z.hours+' h':'—'}</td><td class="r">${h.restHR?r0(h.restHR):'—'}</td><td class="r">${h.workoutMin?r0(h.workoutMin)+' min':'—'}</td></tr>`}).join('')}</table></div>
  ${Object.keys(S.health).length?'<button class="btn sm ghost" data-act="hclear" style="align-self:flex-start">Obriši uvezene podatke</button>':''}</section>`;
}

function vPodsjetnici(){
 return `<div><h1>Podsjetnici</h1><p class="muted">Voda, obroci, trening i suplementi u pravo vrijeme.</p></div>
 <section class="card"><div class="list">${S.reminders.sort((a,b)=>a.time.localeCompare(b.time)).map(r=>`<div class="li"><button class="check ${r.on?'on':''}" data-act="remtoggle" data-id="${r.id}" aria-label="Uključi ili isključi">${r.on?ic('check',3):''}</button>
  <div class="grow"><div class="num small muted">${esc(r.time)}</div><div class="t">${esc(r.text)}</div></div><button class="iconbtn" data-act="remdel" data-id="${r.id}" aria-label="Obriši">${ic('trash')}</button></div>`).join('')}</div></section>
 <section class="card"><h3>Novi podsjetnik</h3><div class="row" style="align-items:stretch"><input type="time" id="rt" value="12:00" style="width:120px"><input type="text" id="rx" placeholder="npr. Uzmi vitamin D" style="flex:1;min-width:0"></div>
 <button class="btn primary" data-act="remadd">${ic('plus')}Dodaj</button></section>
 <section class="card flat"><p class="small muted">Ovi podsjetnici iskaču dok je aplikacija otvorena. Da stižu i kad je zatvorena, dodaj ih u kalendar mobitela.</p><button class="btn primary" data-act="ics">${ic('bell')}Dodaj u kalendar (.ics)</button></section>`;
}

function vProfil(){
 const p=S.profile,T=targets();
 return `<div><h1>Profil</h1><p class="muted">Iz ovih podataka računaju se kalorije, proteini i nutrijenti.</p></div>
 <section class="card"><label class="f">Ime<input type="text" id="p_name" value="${esc(p.name)}"></label>
 <div class="grid2"><label class="f">Spol<select id="p_sex"><option value="m" ${p.sex==='m'?'selected':''}>Muško</option><option value="f" ${p.sex==='f'?'selected':''}>Žensko</option></select></label>
 <label class="f">Godine<input type="number" id="p_age" value="${p.age}"></label><label class="f">Visina (cm)<input type="number" id="p_height" value="${p.height}"></label><label class="f">Težina (kg)<input type="number" id="p_weight" value="${p.weight}" step="0.1"></label>
 <label class="f">Aktivnost<select id="p_act">${Object.entries(ACT).map(([k,v])=>`<option value="${k}" ${+p.activity===+k?'selected':''}>${v}</option>`).join('')}</select></label>
 <label class="f">Cilj<select id="p_goal">${Object.entries(GOALS).map(([k,v])=>`<option value="${k}" ${p.goal===k?'selected':''}>${v}</option>`).join('')}</select></label>
 <label class="f">Proteini (g/kg)<select id="p_ppk">${[1.6,1.8,2.0,2.2,2.4].map(x=>`<option ${+p.proteinPerKg===x?'selected':''}>${x.toFixed(1)}</option>`).join('')}</select></label>
 <label class="f">Prehrana<input type="text" id="p_diet" value="${esc(p.diet)}" placeholder="npr. vegetarijanac"></label></div>
 <button class="btn primary" data-act="saveprofile">Spremi profil</button></section>
 <section class="card"><h3>Tvoji dnevni ciljevi</h3><div class="kv"><div><b>${T.kcal}</b><span>kcal</span></div><div><b>${T.p}</b><span>proteini g</span></div><div><b>${T.c}</b><span>UH g</span></div><div><b>${T.f}</b><span>masti g</span></div></div>
 <p class="small muted">Mifflin-St Jeor formula × razina aktivnosti${p.goal==='cut'?', −450 kcal za mršavljenje':p.goal==='bulk'?', +300 kcal za masu':''}.</p></section>
 <section class="card"><h3>Podaci</h3><button class="btn ghost" data-act="resetall">Obriši sve podatke</button><div id="confirmreset"></div></section>`;
}

function vNapredak(){
 const w=[...S.weights].sort((a,b)=>a.d.localeCompare(b.d)).slice(-30);
 const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(dk(d))}
 const T=targets();
 return `<div><h1>Napredak</h1><p class="muted">Težina i zadnjih 7 dana.</p></div>
 <section class="card"><div class="row between"><h3>Težina</h3>${w.length?`<span class="num">${w[w.length-1].kg} kg</span>`:''}</div>${w.length>1?spark(w):'<p class="empty">Upiši težinu barem dva puta da vidiš graf.</p>'}
 <div class="row" style="align-items:stretch"><input type="number" id="wkg" step="0.1" placeholder="kg" value="${S.profile.weight}" style="width:110px"><button class="btn dark" data-act="addweight">Upiši današnju težinu</button></div></section>
 <section class="card"><h3>Zadnjih 7 dana</h3><div class="tbl-wrap"><table><tr><th>Dan</th><th class="r">kcal</th><th class="r">Proteini</th><th class="r">Koraci</th><th class="r">Voda</th><th class="r">Trening</th></tr>
 ${days.map(d=>{const t=totals(d);return `<tr><td>${DAYS[new Date(d+'T12:00').getDay()].slice(0,3)} ${d.slice(8)}.</td><td class="r">${r0(t.kcal)}</td><td class="r" style="color:${t.p>=T.p*.9?'var(--good)':'inherit'}">${r0(t.p)} g</td><td class="r">${S.health[d]?.steps!=null?r0(S.health[d].steps).toLocaleString('hr-HR'):'—'}</td><td class="r">${S.water[d]||0}</td><td class="r">${S.done[d]||S.health[d]?.workoutMin?'✓':'—'}</td></tr>`}).join('')}</table></div></section>`;
}
function spark(w){
 const W=320,H=90,pad=8,ks=w.map(x=>+x.kg),mn=Math.min(...ks)-0.5,mx=Math.max(...ks)+0.5;
 const pts=w.map((x,i)=>[pad+i*(W-2*pad)/(w.length-1),H-pad-(x.kg-mn)/(mx-mn)*(H-2*pad)]);
 const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
 const last=pts[pts.length-1];
 return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><path d="${d} L${last[0]} ${H} L${pts[0][0]} ${H}Z" fill="var(--accent-soft)"/><path d="${d}" fill="none" stroke="var(--accent)" stroke-width="2.5" vector-effect="non-scaling-stroke"/><circle cx="${last[0]}" cy="${last[1]}" r="4" fill="var(--accent)"/></svg>
 <div class="row between small muted num"><span>${w[0].d.slice(5)} · ${w[0].kg} kg</span><span>${w[w.length-1].d.slice(5)} · ${w[w.length-1].kg} kg</span></div>`;
}

/* ---------- assistant ---------- */
let chatBusy=false, chatLive='';
function vAsistent(){
 const msgs=S.chat;
 const chips=['Letim sutra u 7 za New York','Pod stresom sam, rokovi','Prehlađen sam','Kako mi je prošao tjedan?','Spavao sam 6 h, loše','Uzeo sam vitamin D','Što da jedem za večeru?','Koliko mi još fali proteina?','Zamijeni mi trening, boli me koljeno','Jeftin izvor proteina u Lidlu?','Dodaj 2 čaše vode'];
 return `<div><h1>Asistent</h1><p class="muted">Pita se o treningu, prehrani, nutrijentima, planu i kupnji. Vidi sve tvoje podatke iz aplikacije i može upisati obrok ili vodu.</p></div>
 ${sampleReady?`<p class="small muted">AI: ${esc(AI.label())}</p>`:`<div class="banner"><span>Asistent još nije uključen.</span><button class="btn sm primary" data-go="postavke" style="margin-left:auto">Uključi AI</button></div>`}
 <div class="chat" id="chatlog">${msgs.length?'':`<div class="msg ai">Bok! Ja sam tvoj Lifestyle asistent. Vidim današnje obroke, trening i ciljeve. Što te zanima?</div>`}
 ${msgs.map(m=>`<div class="msg ${m.role==='user'?'me':m.role==='tool'?'tool':'ai'}">${esc(m.content)}</div>`).join('')}
 ${chatBusy?`<div class="msg ai" id="live">${chatLive?esc(chatLive):'<span class="typing"><i></i><i></i><i></i></span>'}</div>`:''}</div>
 <div class="seg">${chips.map(c=>`<button class="chip" data-act="chip" data-v="${esc(c)}">${esc(c)}</button>`).join('')}</div>
 ${msgs.length?'<button class="btn sm ghost" data-act="clearchat" style="align-self:flex-start">Novi razgovor</button>':''}`;
}
const TOOLS=[
 {name:'dodaj_obrok',description:'Upiši obrok koji je korisnik pojeo u dnevnik. Procijeni vrijednosti ako ih korisnik ne navede.',
  inputSchema:{type:'object',properties:{naziv:{type:'string'},kcal:{type:'number'},proteini_g:{type:'number'},uh_g:{type:'number'},masti_g:{type:'number'},vlakna_g:{type:'number'}},required:['naziv','kcal','proteini_g']},
  execute(i){const m=addMeal({name:String(i.naziv||'Obrok'),kcal:+i.kcal||0,p:+i.proteini_g||0,c:+i.uh_g||0,f:+i.masti_g||0,micros:{fiber:+i.vlakna_g||0}});S.chat.push({role:'tool',content:`✓ Upisan obrok: ${m.name} (${m.kcal} kcal)`});return {ok:true,obrok:m.name}}},
 {name:'dodaj_vodu',description:'Dodaj čaše vode (250 ml) u današnji unos.',inputSchema:{type:'object',properties:{case:{type:'number'}},required:['case']},
  execute(i){const n=Math.max(1,Math.min(10,+i.case||1));S.water[dk()]=(S.water[dk()]||0)+n;save();S.chat.push({role:'tool',content:`✓ Dodano ${n} čaše vode`});return {ok:true,ukupno:S.water[dk()]}}},
 {name:'upisi_san',description:'Upiši koliko je korisnik spavao prošlu noć.',inputSchema:{type:'object',properties:{sati:{type:'number'},kvaliteta_1_5:{type:'number'}},required:['sati']},
  execute(i){const h=Math.max(0,Math.min(16,+i.sati||0));S.sleep[dk()]={...(S.sleep[dk()]||{bed:'',wake:''}),hours:r1(h),q:Math.max(1,Math.min(5,+i.kvaliteta_1_5||3))};save();S.chat.push({role:'tool',content:`✓ Upisan san: ${r1(h)} h`});return {ok:true}}},
 {name:'oznaci_suplement',description:'Označi da je korisnik danas uzeo suplement (po nazivu).',inputSchema:{type:'object',properties:{naziv:{type:'string'}},required:['naziv']},
  execute(i){const s=S.supps.find(x=>x.name.toLowerCase().includes(String(i.naziv||'').toLowerCase()));if(!s)throw new Error('Nema tog suplementa na popisu: '+S.supps.map(x=>x.name).join(', '));S.suppTaken[dk()]=S.suppTaken[dk()]||{};S.suppTaken[dk()][s.id]=true;save();S.chat.push({role:'tool',content:`✓ Uzeto: ${s.name}`});return {ok:true}}},
 {name:'upisi_seriju',description:'Upiši odrađenu seriju vježbe (kg 0 za vlastitu težinu).',inputSchema:{type:'object',properties:{vjezba:{type:'string'},kg:{type:'number'},ponavljanja:{type:'number'}},required:['vjezba','ponavljanja']},
  execute(i){const n=String(i.vjezba);S.lifts[n]=S.lifts[n]||[];S.lifts[n].push({d:dk(),kg:+i.kg||0,reps:+i.ponavljanja||0});save();S.chat.push({role:'tool',content:`✓ ${n}: ${i.kg?i.kg+' kg × ':''}${i.ponavljanja}`});return {ok:true}}},
 {name:'upisi_aktivnost',description:'Upiši današnju aktivnost koju korisnik kaže ili zalijepi (koraci, aktivne kcal, km, puls u mirovanju, minute treninga).',inputSchema:{type:'object',properties:{koraci:{type:'number'},aktivne_kcal:{type:'number'},km:{type:'number'},puls_mirovanje:{type:'number'},trening_min:{type:'number'}}},
  execute(i){mergeHealth({[dk()]:{steps:num(i.koraci),activeKcal:num(i.aktivne_kcal),distKm:num(i.km),restHR:num(i.puls_mirovanje),workoutMin:num(i.trening_min)}},'Asistent');S.chat.push({role:'tool',content:'✓ Upisana aktivnost'});return {ok:true,bonus_kcal:activityBonus()}}},
 {name:'postavi_stanje',description:'Postavi trenutno stanje korisnika da se aplikacija prilagodi: stres (0-5), bolest (prehlada|gripa|zeludac|nista), poslovni put (grad, do datuma YYYY-MM-DD, teretana u hotelu), let (datum YYYY-MM-DD, polazak HH:MM, trajanje h, vremenska razlika h, + za istok, odrediste). Šalji samo polja koja se mijenjaju.',
  inputSchema:{type:'object',properties:{stres:{type:'number'},bolest:{type:'string'},put_grad:{type:'string'},put_do:{type:'string'},put_teretana:{type:'boolean'},put_gotov:{type:'boolean'},let_datum:{type:'string'},let_polazak:{type:'string'},let_trajanje_h:{type:'number'},let_razlika_h:{type:'number'},let_odrediste:{type:'string'}}},
  execute(i){const st=S.status,d=dk(),done=[];
   if(i.stres!=null){const l=Math.max(0,Math.min(5,+i.stres||0));st.stress=l?{level:l,since:d}:null;done.push('stres '+l)}
   if(i.bolest){st.sick=SICK[i.bolest]?{type:i.bolest,since:st.sick?.since||d}:null;done.push('bolest: '+(SICK[i.bolest]||'nema'))}
   if(i.put_gotov){st.travel=null;done.push('put završen')} else if(i.put_grad){st.travel={city:i.put_grad,until:i.put_do||'',gym:!!i.put_teretana};done.push('put: '+i.put_grad)}
   if(i.let_datum){st.flight={date:i.let_datum,depart:i.let_polazak||'',hours:+i.let_trajanje_h||0,shift:+i.let_razlika_h||0,dest:i.let_odrediste||''};done.push('let '+i.let_datum)}
   save();S.chat.push({role:'tool',content:'✓ Stanje: '+done.join(', ')});return {ok:true,stanje:statusSummary()}}},
 {name:'dodaj_podsjetnik',description:'Dodaj dnevni podsjetnik u aplikaciju (vrijeme HH:MM).',inputSchema:{type:'object',properties:{vrijeme:{type:'string'},tekst:{type:'string'}},required:['vrijeme','tekst']},
  execute(i){if(!/^\d{2}:\d{2}$/.test(i.vrijeme||''))throw new Error('vrijeme mora biti HH:MM');S.reminders.push({id:uid(),time:i.vrijeme,text:String(i.tekst),on:true});save();S.chat.push({role:'tool',content:`✓ Podsjetnik ${i.vrijeme}: ${i.tekst}`});return {ok:true}}}
];
async function sendChat(text){
 text=(text||'').trim(); if(!text||chatBusy) return;
 refreshAI(); if(!sampleReady){toast(aiErr({code:'unavailable'}));return}
 S.chat.push({role:'user',content:text}); chatBusy=true; chatLive=''; render(); scrollChat();
 const hist=S.chat.filter(m=>m.role!=='tool').slice(-12).map(m=>({role:m.role,content:m.content}));
 while(hist.length&&hist[0].role!=='user') hist.shift();
 const last=hist[hist.length-1];
 last.content=`[UPUTE: Ti si "Lifestyle" asistent u osobnoj aplikaciji za trening i prehranu. Odgovaraj na hrvatskom, kratko i konkretno (do ~120 riječi osim ako korisnik traži više), bez markdown naslova. Savjetuj visok unos proteina, praktične namirnice dostupne u Hrvatskoj. Koristi alate kad korisnik kaže da je nešto pojeo, popio vodu, spavao, uzeo suplement, odradio seriju, traži podsjetnik, ili spomene stres, bolest, poslovni put, let ili jetlag (alat postavi_stanje). Savjete prilagodi STANJU. Za ozbiljne zdravstvene tegobe uputi liječniku.]
[PODACI IZ APLIKACIJE]
${ctxBlock()}
[PORUKA KORISNIKA]
${text}`;
 try{
  const res=await sampleNS(hist,{tools:TOOLS,localIntents:()=>localIntents(text),onText:({text})=>{chatLive=text;const el=$('#live');if(el){el.textContent=text;scrollChat()}}});
  S.chat.push({role:'assistant',content:res.text});
 }catch(e){ S.chat.push({role:'assistant',content:aiErr(e)}) }
 chatBusy=false; chatLive=''; save(); render(); scrollChat();
}
function scrollChat(){ requestAnimationFrame(()=>window.scrollTo({top:document.body.scrollHeight})) }

/* ---------- AI settings, sync, backups, calendar (standalone build) ---------- */
function aiOffNote(extra=''){ return `<div class="banner">${ic('spark')}<span>AI nije uključen${navigator.onLine===false?' (nema interneta)':''}. ${esc(extra)}</span><button class="btn sm primary" data-go="postavke" style="margin-left:auto">Uključi</button></div>` }
function fmtBytes(b){ if(!b) return '0 MB'; return b>1e9?(b/1e9).toFixed(1).replace('.',',')+' GB':Math.round(b/1e6)+' MB' }
function baseURL(){ return location.origin+location.pathname.replace(/index\.html$/,'') }

/* Offline assistant: understands the common commands itself, so logging works even with the smallest model */
async function localIntents(text){
 const t=text.toLowerCase(), done=[], run=(name,input)=>{ const tool=TOOLS.find(x=>x.name===name); try{ tool.execute(input); return true }catch(e){ return false } };
 let m;
 if((m=t.match(/(\d+)\s*(?:čaš\w*|case|čase|casa)\s*(?:vode)?/))&&/vod|čaš|cas/.test(t)&&/popi|pio|pila|dodaj|upiši/.test(t)){ if(run('dodaj_vodu',{case:+m[1]})) done.push(`dodano ${m[1]} ${+m[1]%10>=2&&+m[1]%10<=4&&(+m[1]<12||+m[1]>14)?'čaše':+m[1]===1?'čaša':'čaša'} vode`) }
 else if(/popi\w* (?:čašu|casu) vode|popio sam vodu/.test(t)){ if(run('dodaj_vodu',{case:1})) done.push('dodana 1 čaša vode') }
 if((m=t.match(/spava\w*\s+(?:sam\s+)?(?:samo\s+)?(\d+(?:[.,]\d+)?)\s*(?:h\b|sat)/))){ const q=/loše|lose|užasno|slabo/.test(t)?2:/odlično|odlicno|super/.test(t)?5:/dobro/.test(t)?4:3; if(run('upisi_san',{sati:parseFloat(m[1].replace(',','.')),kvaliteta_1_5:q})) done.push(`upisan san ${m[1]} h`) }
 if(/uzeo|uzela|popio|popila/.test(t)){ for(const s of S.supps){ const key=s.name.toLowerCase().replace(/vitamin\s*/,''); if(t.includes(s.name.toLowerCase())||(key.length>1&&new RegExp('\\b'+key.replace(/[^\wčćšđž-]/g,'')+'\\b').test(t))){ if(run('oznaci_suplement',{naziv:s.name})) done.push('označen '+s.name) } } }
 if((m=t.match(/(\d{1,3}(?:[.\s]\d{3})+|\d{3,6})\s*korak/))){ const n=+m[1].replace(/[.\s]/g,''); if(run('upisi_aktivnost',{koraci:n})) done.push(`upisano ${n} koraka`) }
 if(/pod (?:velikim )?stresom|stresiran|pod pritiskom|rokovi/.test(t)){ const l=/jako|užasno|na rubu|ogroman|velikim/.test(t)?4:3; if(run('postavi_stanje',{stres:l})) done.push('stres '+l+'/5') }
 if(/više nisam pod stresom|nema stresa|opušten/.test(t)){ run('postavi_stanje',{stres:0}); done.push('stres maknut') }
 if(/prehla|curi mi nos|kašlj|kaslj/.test(t)){ run('postavi_stanje',{bolest:'prehlada'}); done.push('stanje: prehlada') }
 else if(/gripa|temperatur|groznic/.test(t)){ run('postavi_stanje',{bolest:'gripa'}); done.push('stanje: gripa') }
 else if(/želud|zelud|povraća|povraca|proljev|mučnin/.test(t)){ run('postavi_stanje',{bolest:'zeludac'}); done.push('stanje: želučane tegobe') }
 else if(/zdrav sam|ozdravio|bolje sam|prošlo me/.test(t)){ run('postavi_stanje',{bolest:'nista'}); done.push('bolest maknuta') }
 if((m=text.match(/(?:poslovn\w*\s+(?:sam\s+)?put\w*|putujem|na putu sam)\s+(?:u|za)\s+([A-ZČĆŠĐŽ][\wčćšđžČĆŠĐŽ-]+)/))){ run('postavi_stanje',{put_grad:m[1],put_teretana:/teretan|gym/.test(t)&&!/nema|bez/.test(t)}); done.push('poslovni put: '+m[1]) }
 if(/vratio sam se|doma sam|kući sam/.test(t)&&S.status?.travel){ run('postavi_stanje',{put_gotov:true}); done.push('put završen') }
 if((m=t.match(/(\d+(?:[.,]\d)?)\s*kg\s*[x×*]\s*(\d+)/))){ const w=workoutToday(); const ex=w.exercises.find(e=>t.includes(e.name.toLowerCase().split(' ')[0])); if(ex&&run('upisi_seriju',{vjezba:ex.name,kg:parseFloat(m[1].replace(',','.')),ponavljanja:+m[2]})) done.push(`serija ${ex.name}`) }
 if((m=t.match(/podsjeti me\s+(?:u\s+)?(\d{1,2})(?:[:.h](\d{2}))?\s*(?:h\b|sati)?\s*(?:da\s+)?(.+)/))){ const hh=m[1].padStart(2,'0'),mm=(m[2]||'00'); if(run('dodaj_podsjetnik',{vrijeme:`${hh}:${mm}`,tekst:m[3].trim()})) done.push(`podsjetnik ${hh}:${mm}`) }
 if(/\b(pojeo|pojela|jeo sam|jela sam|doručkovao|ručao|večerao)\b/.test(t)&&!/što da|sto da|šta da/.test(t)){
  try{ const what=text.replace(/^.*?(pojeo sam|pojela sam|jeo sam|jela sam|doručkovao sam|ručao sam|večerao sam|pojeo|pojela)\s*/i,'');
   const r=await sampleNS.json(`Ti si nutricionist. Korisnik je pojeo: "${what}". Procijeni realne porcije (hrvatske uobičajene).\n${MEAL_SCHEMA}`,{maxTokens:500});
   if(r&&r.name){ const mic={}; MICROS.forEach(x=>mic[x.k]=+(r.micros?.[x.k])||0); addMeal({name:r.name,kcal:+r.kcal||0,p:+r.protein||0,c:+r.carbs||0,f:+r.fat||0,micros:mic}); S.chat.push({role:'tool',content:`✓ Upisan obrok: ${r.name} (${r0(r.kcal)} kcal)`}); done.push(`upisan obrok ${r.name}, ${r0(r.kcal)} kcal, ${r0(r.protein)} g proteina`) }
  }catch(e){}
 }
 return done;
}

/* Health shortcut can open  .../#sync=LIFESTYLE;steps=…  and views can be linked as  #trening */
function handleHash(){
 const h=location.hash||'';
 if(h.startsWith('#sync=')){
  let t=h.slice(6); try{ t=decodeURIComponent(t) }catch(e){}
  history.replaceState(null,'',location.pathname+location.search);
  if(importShortcutText(t)) go('danas');
  return;
 }
 const r=h.slice(1); if(ROUTES[r]&&r!==route) go(r);
}

/* Update available */
function showUpdate(worker){
 let el=$('#update'); if(el) return;
 el=document.createElement('div'); el.id='update'; el.className='toast'; el.style.display='flex'; el.style.gap='10px'; el.style.alignItems='center';
 el.innerHTML='<span>Nova verzija je spremna.</span><button class="btn sm primary">Osvježi</button>';
 el.querySelector('button').onclick=()=>worker.postMessage('skipWaiting');
 document.body.appendChild(el);
}
/* Model download / AI busy bar */
function updateAIBar(){
 const el=$('#aibar'); if(!el) return;
 if(AI.progress){ el.hidden=false; el.querySelector('span').textContent=`AI model: ${Math.round((AI.progress.p||0)*100)} % · ${AI.progress.text.replace(/\[.*?\]/g,'').slice(0,70)}`; el.querySelector('i').style.width=Math.round((AI.progress.p||0)*100)+'%' }
 else if(aiBusyN<=0){ el.hidden=true; el.querySelector('i').style.width='0' }
}

/* Barcode: on-device decoding + Open Food Facts */
async function decodeBarcode(file){
 const small=await downscale(file,1600,.9);
 if('BarcodeDetector' in window){ try{ const bd=new BarcodeDetector({formats:['ean_13','ean_8','upc_a','upc_e','code_128']}); const r=await bd.detect(await createImageBitmap(small)); if(r[0]?.rawValue) return r[0].rawValue }catch(e){} }
 try{
  await loadScript(new URL('vendor/zxing.min.js',location.href).href);
  const hints=new Map(); const F=ZXing.BarcodeFormat; hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS,[F.EAN_13,F.EAN_8,F.UPC_A,F.UPC_E,F.CODE_128]); hints.set(ZXing.DecodeHintType.TRY_HARDER,true);
  const reader=new ZXing.BrowserMultiFormatReader(hints); const url=URL.createObjectURL(small);
  try{ const res=await reader.decodeFromImageUrl(url); return res.getText() } finally { URL.revokeObjectURL(url) }
 }catch(e){ return null }
}
async function offLookup(code){
 if(!code||navigator.onLine===false) return null;
 try{
  const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),8000);
  const r=await fetch(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json?fields=product_name,product_name_hr,brands,serving_quantity,nutriments`,{signal:ctl.signal}); clearTimeout(to);
  if(!r.ok) return null; const j=await r.json(); if(j.status!==1||!j.product) return null;
  const p=j.product,n=p.nutriments||{},g=k=>+n[k+'_100g']||0;
  if(!g('energy-kcal')&&!g('proteins')) return null;
  return {code,name:p.product_name_hr||p.product_name||'Proizvod '+code,brand:(p.brands||'').split(',')[0],serving_g:+p.serving_quantity||100,source:'Open Food Facts',confidence:'visoka',
   per100:{kcal:g('energy-kcal')||g('energy')/4.184,protein:g('proteins'),carbs:g('carbohydrates'),fat:g('fat'),fiber:g('fiber'),sugar:g('sugars'),salt:g('salt')},
   micros100:{vitC:g('vitamin-c')*1000,vitD:g('vitamin-d')*1e6,b12:g('vitamin-b12')*1e6,iron:g('iron')*1000,calcium:g('calcium')*1000,magnesium:g('magnesium')*1000,potassium:g('potassium')*1000,zinc:g('zinc')*1000,omega3:g('omega-3-fat')}};
 }catch(e){ return null }
}
async function findBarcode(code){
 code=String(code||'').replace(/\D/g,''); if(!code){toast('Upiši barkod');return}
 if(S.products[code]){ prodPending={key:code,prod:S.products[code],grams:S.products[code].serving_g||100}; render(); window.scrollTo(0,0); return }
 prodPending={loading:true}; render();
 const pr=await offLookup(code);
 if(pr){ S.products[code]=pr; save(); prodPending={key:code,prod:pr,grams:pr.serving_g||100,isNew:true} }
 else prodPending={error:navigator.onLine===false?`Barkod ${code} nije u tvojim proizvodima, a bez interneta ne mogu pretražiti bazu.`:`Barkod ${code} nije pronađen u bazi Open Food Facts. Slikaj deklaraciju ili upiši obrok ručno.`};
 render(); window.scrollTo(0,0);
}

/* Downloads: backups and calendar */
function downloadFile(name,text,type){
 const blob=new Blob([text],{type}); const url=URL.createObjectURL(blob);
 const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),4000);
}
function exportBackup(){
 const data={app:'lifestyle',version:2,exported:new Date().toISOString(),state:{...S},meals:MEALS.filter(m=>!m.demo)};
 downloadFile(`lifestyle-backup-${dk()}.json`,JSON.stringify(data),'application/json');
 S.lastBackup=dk(); save(); render(); toast('Sigurnosna kopija je spremljena u Preuzimanja');
}
async function importBackup(file){
 try{
  const j=JSON.parse(await file.text());
  if(j.app!=='lifestyle'||!j.state) throw new Error('To nije Lifestyle sigurnosna kopija.');
  S=mergeDefaults(j.state); MEALS=j.meals||[]; S.demoCleared=true; await saveNow(); refreshAI(); go('danas'); toast(`Vraćeno: ${MEALS.length} obroka`);
 }catch(e){ toast(e.message||'Uvoz nije uspio') }
}
function icsEscape(s){ return String(s).replace(/[\\;,]/g,m=>'\\'+m).replace(/\n/g,'\\n') }
function exportICS(){
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'Europe/Zagreb', d=dk().replace(/-/g,''), stamp=new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z';
 const items=[...S.reminders.filter(r=>r.on).map(r=>({id:r.id,time:r.time,text:r.text})),
  ...(S.supps.length?[{id:'supps',time:S.supps[0].time||'09:00',text:'Suplementi: '+S.supps.map(s=>s.name).join(', ')}]:[])];
 if(!items.length){ toast('Nema uključenih podsjetnika'); return }
 const ev=items.map(r=>{const [h,m]=r.time.split(':');return ['BEGIN:VEVENT',`UID:lifestyle-${r.id}@lifestyle.app`,`DTSTAMP:${stamp}`,`DTSTART;TZID=${tz}:${d}T${h}${m}00`,'DURATION:PT10M','RRULE:FREQ=DAILY',`SUMMARY:${icsEscape('Lifestyle: '+r.text)}`,'TRANSP:TRANSPARENT','BEGIN:VALARM','ACTION:DISPLAY',`DESCRIPTION:${icsEscape(r.text)}`,'TRIGGER:PT0M','END:VALARM','END:VEVENT'].join('\r\n')});
 downloadFile('lifestyle-podsjetnici.ics',['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Lifestyle//HR','CALSCALE:GREGORIAN',...ev,'END:VCALENDAR'].join('\r\n'),'text/calendar');
 toast('Otvori preuzetu datoteku i dodaj podsjetnike u kalendar');
}
async function notify(text){
 try{ if(Notification.permission==='granted'){ const reg=await navigator.serviceWorker?.getRegistration(); if(reg){ reg.showNotification('Lifestyle',{body:text,icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'lifestyle-'+text.slice(0,20)}); return } new Notification('Lifestyle',{body:text}); return } }catch(e){}
 toast('⏰ '+text);
}

let aiTest=null, storageInfo=null;
function vPostavke(){
 const c=AI.cfg, prov=AI.provider(), meta=AI_MODELS[c.localModel]||{}, cached=AI.cached[c.localModel], dl=!!AI.progress;
 if(!storageInfo) AI.storage().then(s=>{ storageInfo=s||{}; if(route==='postavke') render() });
 const notif=typeof Notification!=='undefined'?Notification.permission:'unsupported';
 const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
 return `<div><h1>Postavke</h1><p class="muted">AI, obavijesti, kalendar i sigurnosne kopije.</p></div>
 ${standalone?'':`<section class="card flat"><h3>Instaliraj na mobitel</h3><p class="small muted"><b>iPhone (Safari):</b> Dijeli → Dodaj na početni zaslon. <b>Android (Chrome):</b> ⋮ → Instaliraj aplikaciju. Nakon toga radi i bez interneta.</p></section>`}
 <section class="card"><div class="row between"><h3>AI</h3><span class="pill ${prov?'good':'warn'}">${esc(AI.label())}</span></div>
  <div class="seg">${[['auto','Automatski'],['local','Samo na uređaju'],['claude','Samo Claude'],['off','Isključen']].map(([k,v])=>`<button class="chip ${c.mode===k?'on':''}" data-act="aimode" data-v="${k}">${v}</button>`).join('')}</div>
  <p class="small muted">${c.mode==='auto'?'Kad imaš internet i ključ, koristi Claude. Bez interneta koristi model na uređaju.':c.mode==='local'?'Sve ostaje na uređaju. Ništa ne ide na internet.':c.mode==='claude'?'Treba internet i API ključ.':'AI funkcije su isključene; aplikacija radi s ugrađenim pravilima.'}</p></section>

 <section class="card"><div class="row between"><h3>AI na uređaju (offline)</h3><span class="pill ${AI.gpu?'good':AI.gpu===false?'bad':''}">${AI.gpu?'WebGPU radi':AI.gpu===false?'Nema WebGPU':'provjeravam…'}</span></div>
  ${AI.gpu===false?'<div class="banner"><span>Ovaj preglednik ne može pokretati AI na uređaju. Na iPhoneu treba iOS 26+ (Safari), na Androidu Chrome 121+. Na računalu Chrome ili Edge.</span></div>':''}
  <div class="list">${Object.entries(AI_MODELS).map(([id,m])=>`<div class="li"><button class="check ${c.localModel===id?'on':''}" data-act="aimodel" data-v="${id}" aria-label="Odaberi ${esc(m.name)}">${c.localModel===id?ic('check',3):''}</button>
   <div class="grow"><div class="t">${esc(m.name)} ${AI.cached[id]?'<span class="pill good">preuzet</span>':''}</div><div class="small muted">${esc(m.note)} · ${esc(m.dl)} · ${esc(m.mem)}</div></div>
   ${AI.cached[id]?`<button class="iconbtn" data-act="aidel" data-v="${id}" aria-label="Obriši model">${ic('trash')}</button>`:''}</div>`).join('')}</div>
  ${dl?`<div class="stack"><div class="small muted">${esc((AI.progress.text||'').replace(/\[.*?\]/g,''))}</div><div class="bar" style="color:var(--accent)"><i style="width:${Math.round((AI.progress.p||0)*100)}%"></i></div></div>`:''}
  <button class="btn ${cached?'ghost':'primary'}" data-act="aiload" ${dl||AI.gpu===false?'disabled':''}>${ic(cached?'check':'spark')}${cached?(AI.engine&&AI.engineModel===c.localModel?'Model je učitan':'Učitaj model'):'Preuzmi model ('+esc(meta.dl?.replace('preuzimanje ','')||'')+')'}</button>
  <p class="small muted">Preuzima se jednom, preko Wi-Fija. Zatim radi bez interneta. Mali modeli su korisni za upis, savjete i recepte, ali griješe češće od Claudea, pogotovo u brojkama i hrvatskom jeziku. Prvi odgovor nakon pokretanja traje dulje dok se model učita.</p>
  ${storageInfo?.quota?`<p class="small muted num">Prostor: ${fmtBytes(storageInfo.used)} od ${fmtBytes(storageInfo.quota)} dostupnih pregledniku</p>`:''}</section>

 <section class="card"><div class="row between"><h3>Claude (online)</h3><span class="pill ${AI.key?'good':''}">${AI.key?'ključ spremljen':'nema ključa'}</span></div>
  <p class="small muted">Najbolja kvaliteta, čita slike obroka, hladnjaka i deklaracija. Treba vlastiti API ključ s <b>console.anthropic.com</b> (plaća se po korištenju, obično nekoliko centi po analizi). Ključ ostaje samo na ovom uređaju i ne ulazi u sigurnosnu kopiju. Nikad ga ne stavljaj u GitHub repozitorij.</p>
  <label class="f">API ključ<input type="password" id="aikey" value="${esc(AI.key)}" placeholder="sk-ant-…" autocomplete="off" spellcheck="false"></label>
  <label class="f">Model<select id="aicm">${Object.entries(CLAUDE_MODELS).map(([k,v])=>`<option value="${k}" ${c.claudeModel===k?'selected':''}>${v}</option>`).join('')}</select></label>
  <div class="row"><button class="btn primary" data-act="aikeysave">Spremi</button>${AI.key?'<button class="btn ghost" data-act="aikeydel">Ukloni ključ</button>':''}</div></section>

 <section class="card"><h3>Provjera</h3><button class="btn dark" data-act="aitest" ${prov?'':'disabled'}>${ic('spark')}Isprobaj AI</button>
  ${aiTest?`<p class="small ${aiTest.err?'':'muted'}" style="${aiTest.err?'color:var(--bad)':''}">${esc(aiTest.err||`${aiTest.provider==='local'?'Na uređaju':'Claude'} · ${(aiTest.ms/1000).toFixed(1)} s: ${aiTest.text}`)}</p>`:''}</section>

 <section class="card"><h3>Podsjetnici kad je aplikacija zatvorena</h3>
  <p class="small muted">Web aplikacija ne može sama slati obavijesti dok je zatvorena. Zato podsjetnike izvezi u kalendar mobitela: dobit ćeš ih uvijek, svaki dan.</p>
  <button class="btn primary" data-act="ics">${ic('bell')}Dodaj podsjetnike u kalendar (.ics)</button>
  <div class="row between"><span class="small">Obavijesti dok je otvorena</span><button class="btn sm ${notif==='granted'?'ghost':'dark'}" data-act="notif" ${notif==='granted'||notif==='unsupported'?'disabled':''}>${notif==='granted'?'Uključene':notif==='denied'?'Blokirane u postavkama':notif==='unsupported'?'Nije podržano':'Uključi'}</button></div></section>

 <section class="card"><h3>Sigurnosna kopija</h3>
  <p class="small muted">Podaci su samo na ovom uređaju. Ako obrišeš aplikaciju ili podatke preglednika, nestaju. Napravi kopiju povremeno i spremi je u iCloud ili Google Drive.${S.lastBackup?` Zadnja kopija: <b>${esc(S.lastBackup)}</b>.`:''}</p>
  <div class="row"><button class="btn dark" data-act="backup">Izvezi kopiju</button><button class="btn ghost" data-act="restore">Vrati iz kopije</button></div>
  <input type="file" id="restorefile" accept=".json,application/json" hidden></section>

 <section class="card flat"><p class="small muted">Lifestyle · samostalna verzija. Baza proizvoda: Open Food Facts (ODbL). AI na uređaju: WebLLM. Nije medicinski savjet.</p></section>`;
}

/* ---------- render & events ---------- */
const VIEWS={danas:vDanas,trening:vTrening,hrana:vHrana,plan:vPlan,restorani:vRestorani,hladnjak:vHladnjak,stanje:vStanje,povezivanje:vPovezivanje,postavke:vPostavke,san:vSan,suplementi:vSuplementi,snaga:vSnaga,izvjestaj:vIzvjestaj,asistent:vAsistent,nutrijenti:vNutrijenti,napredak:vNapredak,podsjetnici:vPodsjetnici,profil:vProfil};
function render(){ renderChrome(); $('#view').innerHTML=VIEWS[route](); }

document.addEventListener('click',async e=>{
 const g=e.target.closest('[data-go]'); if(g){go(g.dataset.go);return}
 const a=e.target.closest('[data-act]'); if(!a) return;
 const act=a.dataset.act, p=S.profile, d=dk();
 switch(act){
  case 'menu': document.documentElement.classList.add('menu-open'); break;
  case 'menu-close': document.documentElement.classList.remove('menu-open'); break;
  case 'photo': $('#photoinput').click(); break;
  case 'water': {const n=+a.dataset.n; S.water[d]=(S.water[d]===n?n-1:n); save(); render(); break}
  case 'cleardemo': MEALS=MEALS.filter(m=>!m.demo); S.demoCleared=true; save(); render(); toast('Primjeri su obrisani'); break;
  case 'delmeal': await deleteMeal(a.dataset.id); render(); toast('Obrok je obrisan'); break;
  case 'gym': p.gym=a.dataset.v; delete S.workoutAI[d]; save(); render(); break;
  case 'equip': {const v=a.dataset.v; p.equip=p.equip.includes(v)?p.equip.filter(x=>x!==v):[...p.equip,v]; delete S.workoutAI[d]; save(); render(); break}
  case 'exdone': {const i=a.dataset.i; S.ex[d]=S.ex[d]||{}; S.ex[d][i]=!S.ex[d][i]; const w=workoutToday(); if(w.exercises.every((_,k)=>S.ex[d][k])) S.done[d]=true; save(); render(); break}
  case 'wdone': S.done[d]=!S.done[d]; save(); render(); if(S.done[d]) toast('Bravo! Trening je odrađen.'); break;
  case 'resetworkout': delete S.workoutAI[d]; save(); render(); break;
  case 'aiworkout': {
   a.disabled=true; a.innerHTML='<span class="typing"><i></i><i></i><i></i></span> Prilagođavam…';
   try{
    const res=await aiJSON(`Ti si osobni trener. Složi današnji trening za korisnika.
${ctxBlock()}
Dan u tjednu: ${DAYS[new Date().getDay()]}. Plan tjedna: pon potisak, uto noge, sri kondicija, čet povlačenje, pet cijelo tijelo, sub aktivno, ned mobilnost. Ako nema gym, daj vježbe s vlastitom težinom i alternative za održavanje forme. Koristi SAMO opremu koju ima. Trajanje ${p.minutes} min, razina ${p.level}.
Vrati SAMO JSON: {"title","focus","minutes":broj,"warmup":[...],"exercises":[{"name","sets":broj,"reps","rest","tip","alt"}],"cooldown":[...],"note"}`);
    res.source='ai'; res.exercises=res.exercises||[]; res.warmup=res.warmup||[]; res.cooldown=res.cooldown||[]; S.workoutAI[d]=res; S.ex[d]={}; save(); toast('Trening je prilagođen');
   }catch(err){ toast(aiErr(err)) }
   render(); break}
  case 'describe': {const v=$('#mealdesc').value.trim(); if(!v){toast('Opiši što si jeo');break} analyzeText(v); break}
  case 'mult': pending.mult=+a.dataset.v; render(); break;
  case 'cancelpending': pending=null; render(); break;
  case 'savepending': {const r=pending.res,k=pending.mult,mic={}; MICROS.forEach(m=>mic[m.k]=r1((r.micros?.[m.k]||0)*k));
   addMeal({name:r.name,kcal:r.kcal*k,p:r.protein*k,c:r.carbs*k,f:r.fat*k,micros:mic,img:pending.thumb}); pending=null; render(); toast('Obrok je spremljen'); break}
  case 'manualmeal': {const n=$('#m_name').value.trim(); if(!n){toast('Upiši naziv obroka');break}
   addMeal({name:n,kcal:+$('#m_kcal').value,p:+$('#m_p').value,c:+$('#m_c').value,f:+$('#m_f').value}); render(); toast('Obrok je spremljen'); break}
  case 'askgap': go('asistent'); sendChat('Na temelju onoga što mi danas fali, predloži mi konkretnu večeru (namirnice i količine).'); break;
  case 'mkplan': p.budget=+$('#pb').value||p.budget; p.location=$('#pl').value.trim()||p.location; p.mealsPerDay=+$('#pm').value; p.cook=$('#pc').value==='1'; p.diet=$('#pd').value.trim(); save(); mkPlan(); break;
  case 'mkrest': p.location=$('#rl').value.trim()||p.location; p.mealBudget=+$('#rb').value||12; p.craving=$('#rw').value.trim(); save(); mkRest(); break;
  case 'remtoggle': {const r=S.reminders.find(x=>x.id===a.dataset.id); r.on=!r.on; save(); render(); break}
  case 'remdel': S.reminders=S.reminders.filter(x=>x.id!==a.dataset.id); save(); render(); break;
  case 'remadd': {const t=$('#rt').value,x=$('#rx').value.trim(); if(!t||!x){toast('Upiši vrijeme i tekst');break} S.reminders.push({id:uid(),time:t,text:x,on:true}); save(); render(); toast('Podsjetnik je dodan'); break}
  case 'saveprofile': Object.assign(p,{name:$('#p_name').value.trim(),sex:$('#p_sex').value,age:+$('#p_age').value||p.age,height:+$('#p_height').value||p.height,weight:+$('#p_weight').value||p.weight,activity:+$('#p_act').value,goal:$('#p_goal').value,proteinPerKg:+$('#p_ppk').value,diet:$('#p_diet').value.trim(),example:false}); save(); render(); toast('Profil je spremljen'); break;
  case 'addweight': {const kg=+$('#wkg').value; if(!kg){toast('Upiši težinu u kg');break} S.weights=S.weights.filter(x=>x.d!==d); S.weights.push({d,kg:r1(kg)}); p.weight=r1(kg); save(); render(); toast('Težina je upisana'); break}
  case 'resetall': $('#confirmreset').innerHTML=`<div class="banner" style="margin-top:10px"><span>Obrisat će se svi obroci, plan i povijest.</span><button class="btn sm primary" data-act="resetyes" style="margin-left:auto">Obriši</button></div>`; break;
  case 'resetyes': {for(const m of MEALS) await deleteMeal(m.id); S=structuredClone(DEFAULTS); S.demoCleared=true; MEALS=[]; save(); go('danas'); toast('Podaci su obrisani'); break}
  case 'logset': {const i=a.dataset.i,w=workoutToday(),n=w.exercises[i].name,kg=+$('#lk_'+i).value||0,reps=+$('#lr_'+i).value;
   if(!reps){toast('Upiši broj ponavljanja');break}
   S.lifts[n]=S.lifts[n]||[]; S.lifts[n].push({d,kg,reps}); S.lifts[n]=S.lifts[n].slice(-60); S.ex[d]=S.ex[d]||{}; S.ex[d][i]=true; save(); render(); toast(`Upisano: ${n} ${kg?kg+' kg × ':''}${reps}`); break}
  case 'scan': {const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.setAttribute('capture','environment');inp.onchange=()=>{const f=inp.files?.[0];if(f)scanProduct(f)};inp.click();break}
  case 'pgrams': prodPending.grams=+a.dataset.v; render(); break;
  case 'prodcancel': prodPending=null; render(); break;
  case 'prodpick': {const pr=S.products[a.dataset.k]; prodPending={key:a.dataset.k,prod:pr,grams:pr.serving_g||100}; render(); window.scrollTo(0,0); break}
  case 'bcfind': findBarcode($('#bcin').value); break;
  case 'prodsave': {const pr=prodPending.prod,g=+$('#pgr').value||prodPending.grams,k=g/100,h=pr.per100||{},mic={fiber:r1((h.fiber||0)*k)};
   MICROS.forEach(m=>{if(m.k!=='fiber')mic[m.k]=r1((pr.micros100?.[m.k]||0)*k)});
   addMeal({name:`${pr.name} (${g} g)`,kcal:h.kcal*k,p:h.protein*k,c:h.carbs*k,f:h.fat*k,micros:mic}); prodPending=null; render(); toast('Dodano u obroke'); break}
  case 'sq': sleepQ=+a.dataset.v; a.parentElement.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===a)); break;
  case 'savesleep': {const bed=$('#sb').value,wake=$('#sw').value; if(!bed||!wake){toast('Upiši oba vremena');break}
   S.sleep[d]={bed,wake,hours:hoursBetween(bed,wake),q:sleepQ||S.sleep[d]?.q||3}; sleepQ=null; save(); render(); toast('San je upisan'); break}
  case 'supp': {S.suppTaken[d]=S.suppTaken[d]||{}; S.suppTaken[d][a.dataset.id]=!S.suppTaken[d][a.dataset.id]; save(); render(); break}
  case 'suppdel': S.supps=S.supps.filter(s=>s.id!==a.dataset.id); save(); render(); break;
  case 'suppadd': {const p0=SUPP_PRESETS.find(x=>x.name===a.dataset.v); S.supps.push({...structuredClone(p0),id:uid(),time:'09:00'}); save(); render(); break}
  case 'suppcustom': {const n=$('#spn').value.trim(); if(!n){toast('Upiši naziv');break} S.supps.push({id:uid(),name:n,dose:$('#spd').value.trim(),time:'09:00',micros:{}}); save(); render(); break}
  case 'mkreport': mkReport(); break;
  case 'aimode': AI.cfg.mode=a.dataset.v; saveAIConfig(); render(); break;
  case 'aimodel': AI.cfg.localModel=a.dataset.v; saveAIConfig(); render(); break;
  case 'aiload': { try{ await AI.loadLocal(); toast('AI model je spreman i radi bez interneta') }catch(err){ toast(aiErr(err)) } render(); break }
  case 'aidel': await AI.deleteLocal(a.dataset.v); storageInfo=null; render(); toast('Model je obrisan'); break;
  case 'aikeysave': { const k=$('#aikey').value.trim(); if(k&&!/^sk-ant-/.test(k)){toast('Ključ obično počinje sa sk-ant-');} AI.key=k; AI.cfg.claudeModel=$('#aicm').value; saveAIConfig(); render(); toast(k?'Ključ je spremljen na ovom uređaju':'Spremljeno'); break }
  case 'aikeydel': AI.key=''; saveAIConfig(); render(); break;
  case 'aitest': { aiTest=null; a.disabled=true; a.innerHTML='<span class="typing"><i></i><i></i><i></i></span> Pitam…'; try{ aiTest=await AI.test() }catch(err){ aiTest={err:aiErr(err)} } render(); break }
  case 'ics': exportICS(); break;
  case 'notif': { try{ await Notification.requestPermission() }catch(e){} render(); break }
  case 'backup': exportBackup(); break;
  case 'restore': $('#restorefile').click(); break;
  case 'copysync': {const t=$('#syncurl').textContent; navigator.clipboard?.writeText(t).then(()=>toast('Kopirano'),()=>toast('Označi i kopiraj ručno')); break}
  case 'hpaste': {const t=$('#hpaste').value; if(!t.trim()){toast('Zalijepi tekst iz prečaca');break} importShortcutText(t); break}
  case 'copytok': {const t=$('#tok').textContent; navigator.clipboard?.writeText(t).then(()=>toast('Kopirano'),()=>{const r=document.createRange();r.selectNodeContents($('#tok'));const s=getSelection();s.removeAllRanges();s.addRange(r);toast('Označeno, kopiraj ručno')}); break}
  case 'hfile': $('#hfile').click(); break;
  case 'cfile': $('#cfile').click(); break;
  case 'hclear': S.health={}; S.lastSync=null; save(); render(); toast('Uvezeni podaci su obrisani'); break;
  case 'stress': {const l=+a.dataset.v; S.status.stress=l?{level:l,since:d}:null; save(); render(); break}
  case 'sick': {const v=a.dataset.v; S.status.sick=v?{type:v,since:S.status.sick?.since||d}:null; save(); render(); break}
  case 'qstress': S.status.stress={level:3,since:d}; save(); go('stanje'); break;
  case 'qsick': S.status.sick={type:'prehlada',since:d}; save(); go('stanje'); break;
  case 'stclear': S.status={}; save(); render(); toast('Vraćeno na normalno'); break;
  case 'breathe': breathe(); break;
  case 'travelsave': {const c=$('#tc').value.trim(); if(!c){toast('Upiši grad');break} S.status.travel={city:c,until:$('#tu').value,gym:$('#tg').checked}; save(); render(); toast('Plan je prilagođen putu'); break}
  case 'travelend': S.status.travel=null; save(); render(); break;
  case 'travelrest': go('restorani'); break;
  case 'flightsave': {const fd=$('#fd').value; if(!fd){toast('Upiši datum leta');break} S.status.flight={date:fd,depart:$('#fdep').value,hours:+$('#fh').value||0,shift:+$('#fs').value,dest:$('#fdst').value.trim()}; save(); render(); toast('Let je spremljen'); break}
  case 'flightclear': S.status.flight=null; save(); render(); break;
  case 'jetsave': S.status.jetlag={shift:+$('#js').value,start:d}; save(); render(); break;
  case 'jetclear': S.status.jetlag=null; save(); render(); break;
  case 'stai': go('asistent'); sendChat('S obzirom na moje trenutno stanje, napravi mi konkretan plan za danas: obroci s količinama, trening, voda, san i kada što raditi.'); break;
  case 'mood': S.fridge.mood=a.dataset.v; save(); render(); break;
  case 'fmin': S.fridge.minutes=+a.dataset.v; save(); render(); break;
  case 'frdel': S.fridge.items.splice(+a.dataset.i,1); save(); render(); break;
  case 'fradd': {const v=$('#fradd').value.split(',').map(x=>x.trim()).filter(Boolean); if(!v.length){toast('Upiši namirnicu');break} S.fridge.items=[...new Set([...S.fridge.items,...v])]; save(); render(); $('#fradd')?.focus(); break}
  case 'frphoto': {const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.setAttribute('capture','environment');inp.onchange=()=>{fridgeFile=inp.files?.[0]||null;render();if(fridgeFile)toast('Slika hladnjaka je dodana')};inp.click();break}
  case 'mkfridge': mkFridge(); break;
  case 'atefridge': {const r=S.fridge.result.recipes[+a.dataset.i]; addMeal({name:r.name,kcal:r.kcal,p:r.protein_g,c:0,f:0}); toast('Upisano u današnje obroke'); break}
  case 'chip': sendChat(a.dataset.v); break;
  case 'clearchat': S.chat=[]; save(); render(); break;
 }
});
document.addEventListener('change',e=>{
 const p=S.profile;
 if(e.target.id==='lvl'){p.level=e.target.value;delete S.workoutAI[dk()];save();render()}
 if(e.target.id==='sb'||e.target.id==='sw'){const el=$('#sh');if(el)el.textContent=hoursBetween($('#sb').value||'23:00',$('#sw').value||'07:00')+' h'}
 if(e.target.id==='pgr'&&prodPending){prodPending.grams=+e.target.value||100;render()}
 if(e.target.id==='energy'){S.fridge.energy=+e.target.value;save();render()}
 if(e.target.id==='mins'){p.minutes=+e.target.value;delete S.workoutAI[dk()];save();render()}
});
$('#photoinput').addEventListener('change',e=>{const f=e.target.files?.[0]; e.target.value=''; if(f) analyzePhoto(f).catch(err=>{pending={error:err.message||'Greška sa slikom'};render()})});
document.addEventListener('change',async e=>{
 if(e.target.id==='hfile'){const f=e.target.files?.[0]; e.target.value=''; if(f) importAppleExport(f)}
 if(e.target.id==='cfile'){const fs=[...(e.target.files||[])]; e.target.value=''; let msgs=[];
  for(const f of fs){ try{const r=importCSV(await f.text(),f.name.replace(/\.csv$/i,'')); msgs.push(`${f.name}: ${r.n} dana (${r.found.join(', ')})`)}catch(err){msgs.push(`${f.name}: ${err.message}`)} }
  render(); toast(msgs.join(' · '))}
});
document.addEventListener('change',e=>{ if(e.target.id==='restorefile'){ const f=e.target.files?.[0]; e.target.value=''; if(f) importBackup(f) } });
document.addEventListener('paste',e=>{ const t=e.clipboardData?.getData('text')||''; if(t.includes('LIFESTYLE')&&e.target.id!=='hpaste'){ e.preventDefault(); importShortcutText(t) } });
$('#chatform').addEventListener('submit',e=>{e.preventDefault();const v=$('#chatinput').value;$('#chatinput').value='';sendChat(v)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.documentElement.classList.remove('menu-open'); if(e.key==='Enter'&&e.target.id==='fradd'){e.preventDefault();document.querySelector('[data-act="fradd"]')?.click()} if(e.key==='Enter'&&e.target.id==='mealdesc'){e.preventDefault();document.querySelector('[data-act="describe"]')?.click()}});
window.addEventListener('scroll',()=>$('#topbar').classList.toggle('scrolled',window.scrollY>4),{passive:true});

/* reminders while open */
let fired={};
setInterval(()=>{const now=new Date().toTimeString().slice(0,5),k=dk()+now;S.reminders.filter(r=>r.on&&r.time===now).forEach(r=>{if(!fired[k+r.id]){fired[k+r.id]=1;notify(r.text)}})},20000);

/* boot */
(async()=>{
 refreshAI(); MEALS=demoMeals(); render();
 const had=await loadLocal();
 if(!had){ MEALS=demoMeals(); } else if(!S.demoCleared && !MEALS.length){ MEALS=demoMeals(); }
 handleHash(); refreshAI(); render();
 try{ if(navigator.storage?.persist && !(await navigator.storage.persisted())) navigator.storage.persist() }catch(e){}
 AI.checkGPU().then(()=>{ if(route==='postavke') render() });
})();
AI.listeners.add(()=>{ const was=sampleReady+'/'+sampleImages; refreshAI(); updateAIBar(); if(route==='postavke'||was!==sampleReady+'/'+sampleImages) render() });
window.addEventListener('hashchange',handleHash);
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){
 navigator.serviceWorker.register('sw.js').then(reg=>{
  reg.addEventListener('updatefound',()=>{ const nw=reg.installing; nw?.addEventListener('statechange',()=>{ if(nw.state==='installed'&&navigator.serviceWorker.controller) showUpdate(nw) }) });
 }).catch(e=>console.warn('sw',e));
 let reloaded=false; navigator.serviceWorker.addEventListener('controllerchange',()=>{ if(!reloaded){reloaded=true;location.reload()} });
}
