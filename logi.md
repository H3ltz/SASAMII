# sasamii ♡ — Arenduse tegevuslogi

See fail hoiab ülevaadet projekti **sasamii** (*little moments, big discoveries*) arendamisest, tehtud otsustest, tekkinud muredest ja järgmistest sammudest. Logi täiendatakse regulaarselt iga töökorra järel.

---

## 2026-11-24 — Sessioon 1: Projekti plaan, prototüüp ja koodifailide ettevalmistus

- **Tehtud tegevused:**
  - Korrastati projekti visioon, sihtrühm (lapsevanemad, kelle lapsed on vanuses 0–4 aastat), põhifunktsioonid, kasutatavad tehnoloogiad ja valmimise kriteeriumid.
  - Koostati veebirakenduse esialgne prototüüp ja jagati see loogiliselt eraldi failideks (`index.html`, `style.css`, `app.js`).
  - Lisati põhifunktsionaalsus: lapse profiili (nimi ja vanus) lisamine, 5 kategooriat (*Kõne ja keel*, *Motoorika ja liikumine*, *Mälu*, *Loovus*, *Loogika*), otsing, filtrid (vanus, kestus, olemasolevad vahendid), kiire tegevuse valik (5, 10, 15 min), tegevuse detailvaade, lemmikute salvestamine, tehtud tegevuste ajalugu ning hiljuti tehtud tegevuste kordamise vältimine.

- **Tehtud otsused:**
  - Valiti tehnoloogiateks puhas `HTML`, `CSS` ja `JavaScript` ilma raskete raamistiketa, et projekt oleks õppetöös hästi mõistetav, hallatav ja kiiresti käivitatav.
  - Kasutaja andmed (lapse profiil, filtrid, lemmikud ja tehtud tegevused) salvestatakse brauseris `localStorage` mälus võtme `sasamii_v1` all.
  - Failid (`index.html`, `style.css`, `app.js`, `logi.md`) otsustati paigutada repositooriumi juurkausta olemasoleva `README.md` kõrvale.
  - AI-ideede genereerimine jäeti esimesest versioonist välja eeltingimusena ja kavandati hilisemaks edasiarenduseks.

- **Tekkinud probleemid / tähelepanekud:**
  - Algne tegevuste kogu sisaldab 12 tegevust, mida tasub järgmistes etappides veelgi rikastada (eriti eri vanusegruppide ja koduste/õuevahendite lõikes).
  - Kui mitu filtrit on korraga aktiivsed või kui „väldi hiljuti tehtud tegevusi“ on sisse lülitatud, võib valik jääda väikeseks – sellistel juhtudel peab kasutajaliides andma selge ja abistava tagasiside.

- **Järgmised sammud:**
  - Lisada `index.html`, `style.css`, `app.js` ja `logi.md` GitHubi repositooriumisse ning teha esimesed commitid.
  - Testida rakendust brauseris nii arvutis kui ka mobiilivaates (sh `localStorage` säilimine pärast lehe värskendamist).
  - Täiendada tegevuste kogu ja viimistleda kujundust vastavalt testimise käigus ilmnenud tähelepanekutele.

---

## Järgmise töökorra mall (kopeeri ja täida iga uue sessiooni lõpus)

- **Kuupäev:** YYYY-MM-DD
- **Tehtud tegevused:** ...
- **Tehtud otsused:** ...
- **Tekkinud probleemid:** ...
- **Järgmised sammud:** ...