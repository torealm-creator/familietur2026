// ============================================================
//  data.js  –  REDIGER DENNE FILEN FOR Å OPPDATERE BLOGGEN
//  Last opp til GitHub så oppdateres nettsiden automatisk
// ============================================================

const TRIP_DATA = {

  // ── STATUS (oppdater dette daglig) ──────────────────────
  status: {
    text:       "Forbereder avreise",
    location:   "Nannestad, Norge",
    day:        "Dag 0 av 9",
    nextStop:   "Larvik havn",
    kmDriven:   0,
    isLive:     false,
  },

  // ── GPS-POSISJON ─────────────────────────────────────────
  currentPosition: {
    lat: 60.2453,
    lng: 11.0371,
    label: "Nannestad"
  },

  // ── RUTE-STOPP ───────────────────────────────────────────
  routeStops: [
    { label: "Nannestad",  state: "current" },
    { label: "Hirtshals",  state: "" },
    { label: "Amsterdam",  state: "" },
    { label: "Loire",      state: "" },
    { label: "Bordeaux",   state: "" },
    { label: "Biarritz",   state: "" },
    { label: "Altea",      state: "" },
  ],

  // ── BLOGGINNLEGG ─────────────────────────────────────────
  posts: [],

  // ── BILDER ───────────────────────────────────────────────
  photos: [],

  // ── RUTE PÅ KARTET ───────────────────────────────────────
  routeCoords: [
    [60.2453, 11.0371],  // Nannestad
    [59.0440, 10.0281],  // Larvik
    [57.5909,  9.9608],  // Hirtshals
    [55.7000,  9.5333],  // Vejle
    [53.5511,  9.9937],  // Hamburg
    [51.2194,  4.4025],  // Antwerp
    [52.3676,  4.9041],  // Amsterdam
    [47.6158,  1.5169],  // Chambord, Loire
    [44.8378, -0.5792],  // Bordeaux
    [43.4832, -1.5586],  // Biarritz
    [41.4036, -2.1750],  // Zaragoza
    [39.4699, -0.3763],  // Valencia
    [38.5994, -0.0503],  // Altea
  ],
};
