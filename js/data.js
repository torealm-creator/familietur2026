// Oppdatert: 27.6.2026, 06:44:01
const TRIP_DATA = {

  contact: {
    phone: "",
    email: "",
  },

  glympse: {
    active: true,
    url:    "https://maps.app.goo.gl/SHXzwAi5Z1nBSWbXA",
  },

  status: {
    text:     "Startet på tur, Dag 1",
    location: "Nannestad, Norge",
    day:      "Dag 1 av 4",
    nextStop: "Larvik havn → Ringe, Tyskland",
    kmDriven: 189,
    isLive:   true,
  },

  currentPosition: {
    lat:   59.04121,
    lng:   10.04684,
    label: "Larvik",
  },

  routeStops: [
    { label: "Nannestad", state: "done" },
    { label: "Hirtshals", state: "" },
    { label: "Ringe", state: "" },
    { label: "Amsterdam", state: "" },
    { label: "Loire", state: "" },
    { label: "Bordeaux", state: "" },
    { label: "Altea", state: "" }
  ],

  posts: [
    {
      id: "post_1782073603715", date: "21. juni 2026", location: "Nannestad, Norge",
      title: "Mot Altea, tredje gang, ny bil, samme leilighet!", excerpt: "Kun kort tid til avreise og siste finpuss på det tekniske. Ladekablene er pakket, ruta er planlagt (en ny en, som alltid...",
      fullText: "Kun kort tid til avreise og siste finpuss på det tekniske. Ladekablene er pakket, ruta er planlagt (en ny en, som alltid – vi har aldri kjørt samme vei to ganger), og bilen er klar for sin første store prøve sørover.\n\nFor i år bytter vi hest i løpet: det er ikke Marias Xpeng G9 som skal kjøre oss til Spania, men min nye Zeekr 7X. Spennende å se hvordan den takler turen.\n\nTore, Maria, Christoffer og Charlotte ruller sørover. Caroline blir hjemme og jobber – og dermed mister vi vår innebygde shoppingradar. Ingen som peker ut \"den butikken der ser spennende ut\" når vi kjører gjennom en by denne gangen.\n\nReisemålet er som vanlig: leiligheten som mamma og Pål eier i Altea. Vi vet hvor nøklene henger, hvor de beste tomatene er, og at balkongen er perfekt for en kald drikke etter en lang kjøretur.\n\nNy bil, ny rute, samme deilige reisemål. Caroline – vi tar bilder!\n\nGod sommer! ☀️", image: "bilder/0C041B0E-8176-44FA-8688-B738D83F110D.png",
      extraImages: [], featured: true,
    }
  ],

  photos: [
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782535426/xplt3cvhywom6vtdfgmo.jpg", caption: "Ble full bil" },
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782535302/utkyx7tx56buvqiyf1xc.jpg", caption: "Klar for colorline" }
  ],

  routeCoords: [
    [60.2453, 11.0371],
    [59.044, 10.0281],
    [57.5909, 9.9608],
    [55.7, 9.5333],
    [52.45, 6.88],
    [53.5511, 9.9937],
    [51.2194, 4.4025],
    [52.3676, 4.9041],
    [47.6158, 1.5169],
    [44.8378, -0.5792],
    [43.4832, -1.5586],
    [41.4036, -2.175],
    [39.4699, -0.3763],
    [38.5994, -0.0503]
  ],

  routePath: [
    [60.2453, 11.0371],
    [59.044, 10.0281],
    [57.5909, 9.9608],
    [55.7, 9.5333],
    [52.45, 6.88],
    [53.5511, 9.9937],
    [51.2194, 4.4025],
    [52.3676, 4.9041],
    [47.6158, 1.5169],
    [44.8378, -0.5792],
    [43.4832, -1.5586],
    [41.4036, -2.175],
    [39.4699, -0.3763],
    [38.5994, -0.0503]
  ],
};