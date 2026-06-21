# Nordiska Banken - Handläggningssystem (PoC)

Detta är en Proof of Concept (PoC) för ett internt handläggningssystem hos en nordisk bank. Syftet är att demonstrera design, gränssnitt och interaktionsmönster för bankens handläggare som hanterar låneärenden.

Gränssnittet är på **svenska**.

---

## 🛠 Layout & Designriktlinjer

För att säkerställa en enhetlig användarupplevelse på allt från 24" skärmar till 34" ultrawide-skärmar följer layouten dessa fasta regler:

*   **Maximal Bredd**: Hela applikationen (sidomeny + huvudinnehåll) är begränsad till max `1440px` och centreras horisontellt på skärmen för ett inramat utseende.
*   **Sidomeny (Sidebar)**: Fast bredd på `320px` i expanderat läge. Kan minimeras till `100px` via toggle-knappen. Vid minimering döljs textbeskrivningar, och statusindikatorer visas som små badge-overlays på ikonerna.
*   **Låst rullning på Desktop (No Page Scroll)**: På skärmar $\ge$ 1300px är viewporten låst till `100vh`. Ingen global rullning tillåts. Istället använder enskilda kort i gränssnittet intern rullning (`overflow-y: auto`) med skräddarsydda tunna scrollbars.
*   **Responsiv Stapling**: Om skärmbredden understiger 1300px staplas korten automatiskt i en kolumn för att förhindra textspill och trängsel.

### Default States: Edit vs Read-Only
Gränssnittet tillämpar ett kontextmedvetet beteende gällande redigerbarhet:
* **Sidor med status TODO:** Öppnas automatiskt i **Edit-mode** eftersom den primära åtgärden är att mata in ny data. Handläggaren kan dock manuellt växla till skrivskyddat läge.
* **Sidor med status DONE:** Öppnas automatiskt i **Read-only-mode** för att skydda ifylld data och maximera läsbarheten. Handläggaren kan klicka på "Redigera" för att tillfälligt låsa upp fälten.
* **Tomma fält i Read-only:** Fält som saknar värde ska visas med en "Explicit saknad"-platshållare (t.ex. *— Ej angivet —*) i ljusgrå kursiv stil för att tydligt signalera att data saknas, snarare än att visa ett helt tomt fält.

---

## 📂 Ärendesteg (Processförlopp)

Ett låneärende består av följande 10 processteg där varje steg representeras av en egen HTML-sida:

1.  **Kundinformation** (`kundinformation.html`) — *Implementerad i PoC*
2.  **Låneansökan**
3.  **Engagemang**
4.  **Policykontroll 1**
5.  **Säkerheter**
6.  **Policykontroll 2**
7.  **Uppsummering och risk**
8.  **Beslut**
9.  **Dokument**
10. **Avslut**

---

## 🏗 Layoutarkitektur & HTML-fragment

För att undvika kodduplicering av sidomeny, sidhuvud och sidfot på varje enskild HTML-sida är layouten uppdelad i återanvändbara fragment.

### Hur fragmenten är uppbyggda
Fragmenten finns sparade som rena HTML-filer i katalogen:
*   [components/sidebar.html](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/components/sidebar.html)
*   [components/header.html](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/components/header.html)
*   [components/footer.html](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/components/footer.html)

### CORS & file:// Hantering (Varför components.js finns)
Webbläsare blockerar normalt lokala nätverksanrop (`fetch()`) på grund av säkerhetsinställningar (CORS) när du öppnar HTML-filer direkt från filsystemet genom att dubbelklicka på dem (`file://`-protokollet).

För att göra PoC:en **så enkel som möjligt att starta och testa utan krav på en lokal webbserver** har vi implementerat en hybridlösning:
1.  Vi har skapat filen [components.js](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/components.js) som lagrar dessa HTML-mallar som Javascript-strängar.
2.  Scriptet [app.js](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/app.js) läser i första hand in layouten direkt från minnet via `components.js`. Detta fungerar direkt vid lokala dubbelklick.
3.  Om du kör PoC:en via en lokal webbserver (t.ex. `npx serve` eller Python) och tar bort `components.js`, faller scriptet automatiskt tillbaka på att göra riktiga `fetch()`-anrop till `.html`-filerna under `components/`.

---

## 🚀 Kom igång lokalt

### Alternativ A: Öppna direkt i webbläsaren (Enklast)
Dubbelklicka bara på [index.html](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/index.html) eller [kundinformation.html](file:///c:/Users/jespe/Documents/DeveloperArea/frontend-playground/kundinformation.html) direkt i din filutforskare. 

### Alternativ B: Starta lokal webbserver (Simulera produktion)
Kör något av följande kommandon i projektkatalogen för att köra via HTTP:
```powershell
# Med Node.js
npx serve

# Med Python
python -m http.server 8000
```
Öppna sedan `http://localhost:3000` eller `http://localhost:8000` i din webbläsare.

---

## 📌 Nyckelprinciper för utveckling
*   Fråga vid oklarheter innan stora ändringar görs.
*   Testa endast den funktionalitet som uttryckligen efterfrågats för att hålla PoC-koden ren.
*   Nyutvecklade sidor ska alltid respektera `1440px` breddbegränsningen och dela samma sidomeny, sidhuvud och sidfot.
