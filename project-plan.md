Cosmetic-Webpage — Projekt Iránytű
Utoljára frissítve: 2026-05-24
GitHub repo: magyarnana97-blip/Cosmetic-webpage
Referencia oldal: dobakzita.hu
Verzió: 0.1.0
 
1. A Projekt Célja
A weboldal célja, hogy anyukámnak — aki masszázssal, kozmetikával és illóolajokkal foglalkozik — professzionális, modern, keresőbarát és könnyen karbantartható bemutatkozó oldalt biztosítson. Az oldal legyen képes ügyfélszerző, foglalást és fizetést kezelő, több nyelven működő platformmá fejlődni.
 
2. Technológiai Döntések (Rögzítve)
Terület	Választott Technológia	Indoklás
Keretrendszer	Astro	Gyors, statikus, SEO-barát, jól bővíthető
Hosting	Netlify	Ingyenes alap tier, automatikus deploy GitHubról
CMS	Decap CMS	Ingyenes, Netlify-kompatibilis, könnyen szerkeszthető
Verziókövetés	Git + GitHub	Minden változtatás nyomon követhető, visszaállítható
Domain	Először ingyenes Netlify domain, később .hu	Fokozatos lépés, ráérünk
Chatbot	NEM kell	Felesleges, a projekt nem igényli

 
3. Kötelező Funkciók (Minden Fázisban Betartandó)
Megjelenés
•	Sötét mód és világos mód egyaránt támogatott (rendszer-preferencia szerint automatikus, manuálisan is kapcsolható)
•	Mikroanimációk (finom, elegáns mozgások — nem tolakodó)
•	Teljesen mobilbarát és minden böngészőn kompatibilis
•	Csúcsminőségű betűtípusok és dizájn (nem sablonos kinézet)
Teljesítmény
•	Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
•	Képek lazy load-dal, megfelelő méretezéssel
•	Teljes oldal kezdeti betöltési mérete < 800 KB
SEO
•	Minden oldalnak saját meta title, description, og:image
•	Megfelelő heading hierarchia (h1 → h2 → h3)
•	Strukturált adatok (Schema.org) — különösen LocalBusiness, Service
•	Google indexelésre optimalizált oldalsebességgel
Hozzáférhetőség
•	Billentyűzettel navigálható
•	Alt szöveg minden képnél
•	WCAG AA szintű kontrasztok
•	Semantikus HTML struktúra
 
4. Tartalmi Struktúra (Tervezett Oldalak)
Főoldal (index)
•	Hero szekció — figyelemfelkeltő kép, slogan, CTA gomb
•	Bemutatkozó blokk — ki ő, mit csinál röviden
•	Kiemelt szolgáltatások — 3–4 kártya formátumban
•	Vélemények szekció — ügyfélvélemények
•	Kapcsolat / foglalás CTA
Rólam oldal
•	Részletes bemutatkozás
•	Végzettségek, tanfolyamok
•	Filozófia, értékek
•	Fotók
Szolgáltatások oldal
•	Minden szolgáltatás részletesen
•	Időtartam, ár (vagy árajánlat kérés)
•	Képekkel illusztrálva
Árak oldal (opcionális, lehet a Szolgáltatásokkal együtt)
•	Egyértelmű árlista
•	Csomagok ha releváns
Kapcsolat oldal
•	Kapcsolati form
•	Cím, térkép
•	Telefon, e-mail
•	Nyitvatartás
Foglalás (Később — 2. fázis)
•	Online időpontfoglaló rendszer integrációja
•	Megerősítő e-mail
 
5. Többnyelvűség
A weboldal HU / EN / DE nyelven fog működni.
•	Minden szöveg — főcím, menü, gombok, leírások, feliratok — külön language fájlban tárolt
•	Könnyű hozzáadni bármilyen új nyelvet, csak egy új fordítási fájl kell
•	A nyelv URL-ben is jelzi magát: /en/, /de/, / (alapértelmezett: HU)
•	A Decap CMS admin felülete is legyen felhasználóbarát, lehetőleg HU/EN szerkesztéssel
 
6. CMS — Tartalom Szerkesztés
A kozmetikus maga is tudja kezelni az oldal tartalmát, programozói tudás nélkül:
•	Szövegek, képek, árak szerkesztése
•	Vélemények hozzáadása / törlése
•	Szolgáltatások módosítása
•	Elérhető Netlify-on keresztül, GitHub bejelentkezéssel
 
7. Fejlesztési Roadmap (Fázisok)
🔵 Fázis 1 — Alap oldal (Most zajlik)
•	[x] Astro projekt létrehozva
•	[x] GitHub repo összekötve
•	[ ] Főoldal hero szekció megtervezve
•	[ ] Dizájnrendszer kialakítva (szín, betű, spacing)
•	[ ] Alap layout és navigáció
•	[ ] Rólam, Szolgáltatások, Kapcsolat oldalak placeholder tartalommal
•	[ ] Netlify deploy beállítva
•	[ ] Alap SEO meta tagek
🟡 Fázis 2 — Tartalom és CMS
•	[ ] Végleges szövegek és képek bekerülnek
•	[ ] Decap CMS beállítva
•	[ ] Sötét mód implementálva
•	[ ] Mikroanimációk hozzáadva
•	[ ] Többnyelvűség (HU/EN/DE) alap struktúra
•	[ ] Vélemények szekció működik
•	[ ] SEO finomhangolás (schema.org, sitemap, robots.txt)
🟠 Fázis 3 — Bővítmények
•	[ ] Online foglalási rendszer integrálva
•	[ ] Fizetési megoldás (ha szükséges)
•	[ ] Teljesítmény audit és Core Web Vitals finomhangolás
•	[ ] Saját .hu domain beállítva
•	[ ] Google Analytics / Search Console integrálva
🔴 Fázis 4 — Karbantartás és fejlesztés
•	[ ] Folyamatos tartalom frissítés CMS-en keresztül
•	[ ] Szezonális kampányok / ajánlatok
•	[ ] Esetleges új oldalak, funkciók
 
8. Dizájn Alapelvek
•	Stílus: Elegáns, nőies, prémium — nem sablonos
•	Referencia: dobakzita.hu mint kiindulási inspiráció
•	Szín: Meleg, természetes tónusok — bézs, arany, terrakotta, vagy krém/fehér alapú
•	Betűtípus: Elegáns display font (pl. Cormorant, Zodiak) + olvasható body font (Satoshi, General Sans)
•	Képek: Valódi, professzionális fotók — ne stockfotó
•	Animációk: Finom scroll-animációk, hover effektek, de nem hivalkodó
•	Sötét mód: Melegebb, nem hideg kék alapú dark mód
 
9. Amit Nem Csinálunk
•	AI chatbot → NEM
•	Bonyolult custom backend → NEM (Netlify Functions max, ha kell)
•	WordPress → NEM
•	Fizető hostingra nem váltunk, amíg ingyenesen megoldható → NEM szükséges most
 
10. Git Workflow (Fejlesztési Szokások)
Minden komolyabb módosítás után:
git add .
git commit -m "Mit csináltál röviden, pl: Hero szekció hozzáadva"
git push

Mérföldköveknél (pl. elkészült az alap főoldal) verziócímkét adunk:
git tag v0.1.0
git push origin v0.1.0

 
11. Ahol Tartunk Most
•	Astro projekt: ✅ Létrehozva
•	GitHub repo: ✅ Összekötve és működik
•	Localhost szerver: ✅ Fut
•	Főoldal alap tartalma: ✅ Megvan (de még sablonos)
•	Dizájn: ⏳ Még nem kezdtük el
•	Netlify deploy: ⏳ Még nem állítottuk be
•	CMS: ⏳ Fázis 2
•	Többnyelvűség: ⏳ Fázis 2
 
Következő konkrét lépés: A főoldal hero szekciójának megtervezése és a dizájnrendszer (szín, betű, spacing) kialakítása — ez lesz a Fázis 1 következő feladata.
