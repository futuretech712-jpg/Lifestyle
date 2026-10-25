# Lifestyle

Osobna aplikacija za trening, prehranu, san i navike. Radi u pregledniku, instalira se na mobitel kao aplikacija i radi bez interneta, uključujući AI asistenta koji se pokreće na samom uređaju.

## Što radi

- **Danas:** kalorije, makronutrijenti, što ti fali, voda, koraci, san, suplementi
- **Trening:** dnevni plan prema opremi (bez gyma, kućna oprema, gym) i bilježenje serija
- **Stanje:** prilagodba stresu, bolesti, poslovnom putu, letu i jetlagu
- **Hrana:** slikanje obroka (AI), opis riječima, ručni unos, skeniranje barkoda (Open Food Facts)
- **Što kuhati:** recepti prema raspoloženju, energiji i onome što imaš u hladnjaku
- **Planiranje:** meal prep po budžetu i lokaciji, restorani
- **Praćenje:** nutrijenti, suplementi, san, snaga, napredak, tjedni izvještaj
- **Povezivanje:** Apple Health (prečac ili izvoz), Google Fit, Samsung Health, Garmin, Fitbit (CSV)
- **AI asistent:** može upisati obrok, vodu, san, suplement, seriju, stanje i podsjetnik

## Objava na GitHub Pages (5 minuta)

1. Na GitHubu napravi novi repozitorij, npr. `lifestyle`. Može biti javni ili privatni; privatni repozitoriji podržavaju Pages samo na plaćenom planu.
2. Klikni **Add file → Upload files**. Povuci **sav sadržaj** ove mape (ne samu mapu), uključujući mape `vendor`, `fonts` i `icons` te datoteku `.nojekyll`. Klikni **Commit changes**.
3. Otvori **Settings → Pages**. Pod **Source** odaberi **Deploy from a branch**, branch **main**, mapa **/ (root)**. Spremi.
4. Za minutu-dvije aplikacija je na `https://TVOJE-IME.github.io/lifestyle/`.

> Datoteka `.nojekyll` je skrivena. Ako je ne vidiš, u Finderu pritisni Cmd + Shift + . (točka), ili je napravi na GitHubu (Add file → Create new file → naziv `.nojekyll`, prazan sadržaj).

## Instalacija na mobitel

- **iPhone:** otvori adresu u **Safariju** → **Dijeli** → **Dodaj na početni zaslon**.
- **Android:** otvori u **Chromeu** → **⋮** → **Instaliraj aplikaciju**.

Nakon prvog otvaranja cijela aplikacija ostaje na mobitelu i radi bez interneta.

## AI

U aplikaciji: **izbornik → Postavke → AI**.

| Način | Internet | Kvaliteta | Čita slike | Cijena |
|---|---|---|---|---|
| **Na uređaju** (WebLLM) | samo za prvo preuzimanje | dobra za upis i savjete, slabija za brojke | samo model "S vidom" (iPad / računalo) | besplatno |
| **Claude** (API ključ) | da | najbolja | da | plaća se po korištenju |
| **Automatski** | koristi Claude kad si online, model na uređaju kad nisi | | | |

**AI na uređaju**
- Odaberi model i klikni **Preuzmi**, po mogućnosti preko Wi-Fija. Preporučeni Srednji model ima oko 1 GB.
- Treba preglednik s WebGPU-om: iPhone s iOS-om 26 ili novijim (Safari), Android s novijim Chromeom, ili računalo s Chromeom ili Edgeom.
- Model se jednom preuzme s Hugging Facea i ostaje u pregledniku.
- Bez interneta asistent sam prepoznaje česte naredbe ("popio sam 2 čaše vode", "spavao sam 7 h", "uzeo sam vitamin D", "prehlađen sam", "na poslovnom sam putu u Beč", "12000 koraka", "podsjeti me u 15 da…").

**Claude**
- Ključ napravi na <https://console.anthropic.com> (API Keys) i nadoplati kredit. Claude Pro pretplata ne uključuje API.
- Ključ se sprema samo na tvom uređaju.
- **Nikad ga ne stavljaj u kod ni u repozitorij.**

## Podaci i privatnost

- Svi podaci (obroci, trening, san, profil) spremaju se **samo na uređaju**, u IndexedDB-u preglednika. Ništa se ne šalje na server.
- Iznimke:
  - pretraga barkoda šalje broj barkoda Open Food Factsu
  - ako koristiš Claude, upiti i slike idu Anthropicu
- Instalirana aplikacija na iPhoneu ima odvojene podatke od Safarija.
- Koristi **Postavke → Sigurnosna kopija** i spremi kopiju u iCloud ili Google Drive. Iz kopije možeš vratiti podatke na novom uređaju.

## Podsjetnici

Web aplikacija ne može slati obavijesti dok je zatvorena, ako nema vlastiti server. Zato:
- **Postavke → Dodaj podsjetnike u kalendar (.ics)** doda dnevne podsjetnike u kalendar mobitela. Oni stižu uvijek.
- Dok je aplikacija otvorena, podsjetnici iskaču i kao obavijesti.

## Apple Health

Detalji su u aplikaciji pod **Povezivanje**. Ukratko:
- Prečac u aplikaciji Prečaci skupi današnje podatke i otvori `https://TVOJE-IME.github.io/lifestyle/#sync=…`. Lifestyle ih tada sam uveze.
- Možeš ga postaviti kao automatizaciju svaku večer.
- Za povijest koristi **Zdravlje → profil → Izvezi sve zdravstvene podatke** i odaberi `export.zip` u aplikaciji.

## Ažuriranje

Kad promijeniš bilo koju datoteku, u `sw.js` povećaj `VERSION` (npr. `lifestyle-v1.0.1`) i ponovno uploadaj. Aplikacija na mobitelu ponudi **Osvježi**.

## Struktura

```
index.html            izgled i stilovi
app.js                cijela aplikacija
ai.js                 AI sloj (model na uređaju + Claude API)
llm-worker.js         pokreće AI model u pozadini
sw.js                 offline rad (service worker)
manifest.webmanifest  instalacija kao aplikacija
vendor/               WebLLM, ZXing (barkod), JSZip (Health izvoz)
fonts/, icons/
```

## Licence

WebLLM (Apache-2.0), ZXing (Apache-2.0), JSZip (MIT/GPLv3), fontovi Bricolage Grotesque, Manrope i JetBrains Mono (SIL OFL), Open Food Facts podaci (ODbL). Licence su u mapama `vendor/` i `fonts/`.

Lifestyle nije medicinski savjet.
