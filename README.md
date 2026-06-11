# 🚗 Sommertur 2026 – Reiseblogg

Familiens reiseblogg fra Nannestad til San Sebastián.

---

## 📁 Filstruktur

```
sommertur/
├── index.html        ← Selve bloggen (det svigerfar ser)
├── admin.html        ← Admin-side for å oppdatere (kun familien)
├── js/
│   ├── data.js       ← ALT innhold ligger her – rediger denne!
│   └── blog.js       ← Motor som leser data.js (ikke rør)
└── bilder/           ← Last opp turbilder hit
    └── (dine bilder)
```

---

## 🚀 Oppsett (én gang, tar 15 min)

### 1. GitHub

1. Gå til [github.com](https://github.com) og lag en gratis konto
2. Klikk **New repository** → gi det et navn, f.eks. `sommertur2026`
3. Last opp alle filene (dra og slipp i nettleseren)
4. Opprett en tom mappe `bilder/` (legg inn en dummy-fil om nødvendig)

### 2. Netlify

1. Gå til [netlify.com](https://netlify.com) og logg inn med GitHub
2. Klikk **Add new site → Import an existing project**
3. Velg `sommertur2026`-repoet ditt
4. Klikk **Deploy** – siden er live på få sekunder!
5. Du får en URL som `sommertur2026.netlify.app` – del med svigerfar 🎉

---

## 📱 Slik oppdaterer du underveis (fra telefonen)

1. Åpne `admin.html` på nettsiden din (f.eks. `sommertur2026.netlify.app/admin.html`)
2. Skriv inn koden (`tur2026` – endre i admin.html!)
3. Fyll inn status, GPS-posisjon, nytt blogginnlegg og/eller bilder
4. Trykk **Last ned oppdatert data.js** – eller **Kopier**
5. Åpne GitHub-appen på telefonen
6. Gå til `js/data.js` i repoet → rediger → lim inn → lagre
7. Netlify oppdaterer nettsiden automatisk på **~30 sekunder** ✅

### For bilder:
- Last opp bilder direkte til `bilder/`-mappen i GitHub-appen
- Oppgi filnavnet (f.eks. `bilder/dag3.jpg`) i admin-siden

---

## 🔐 Endre passord

Åpne `admin.html` og finn denne linjen:
```javascript
const KODE = "tur2026";
```
Bytt til noe bare familien vet.

---

## 🗺️ GPS / live posisjon

I admin-siden:
- Klikk **Hent GPS-posisjon automatisk** på telefonen
- Koordinatene fylles inn automatisk
- Last opp `data.js` som vanlig

Kartet på bloggen viser da en oransje prikk der dere er! 📍

---

## 💡 Tips

- Oppdater gjerne **én gang per dag** med dagsoppsummering
- Send lenken til svigerfar, venner og familie
- Siden er mobiloptimert – fungerer perfekt på alle skjermer
- Alt er gratis (GitHub + Netlify = 0 kr)
