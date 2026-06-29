// Oppdatert: 29.6.2026, 12:31:46
const TRIP_DATA = {

  contact: {
    phone: "+4790073977",
    email: "Tore_alm@icloud.com",
  },

  glympse: {
    active: true,
    url:    "https://maps.app.goo.gl/SHXzwAi5Z1nBSWbXA",
  },

  status: {
    text:     "Dag 3.1-Første stopp- er lite slott i Frankrike",
    location: "L’aérodrome d’Étampes- Mondésir",
    day:      "Dag 3 av 4",
    nextStop: "Loire-dalen",
    kmDriven: 1927,
    isLive:   true,
  },

  currentPosition: {
    lat:   47.66378,
    lng:   1.53386,
    label: "Chambord,Frankrike",
  },

  routeStops: [
    { label: "Nannestad", state: "done" },
    { label: "Hirtshals", state: "done" },
    { label: "Ringe", state: "done" },
    { label: "Amsterdam", state: "done" },
    { label: "Loire", state: "" },
    { label: "Bordeaux", state: "" },
    { label: "Altea", state: "" }
  ],

  posts: [
    {
      id: "post_1782722730568", date: "29. juni 2026", location: "Chambord",
      title: "Dag 3 - franske slott", excerpt: "Dagen starter med et stopp på Chateau de Chambord. De største og mest ikoniske renessanse slottet i Loire dalen med sine...",
      fullText: "Dagen starter med et stopp på Chateau de Chambord. De største og mest ikoniske renessanse slottet i Loire dalen med sine 426 rom, 282 peiser, and 77 trapper.", image: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782722705/lcpiuv4rqw4e19rqzuls.webp",
      extraImages: [], featured: false,
    },
    {
      id: "post_1782680133454", date: "28. juni 2026", location: "Mondésir,Frankrike",
      title: "Dag 2.2 Gjennom tre land på én dag – nå i Frankrike!", excerpt: "Amsterdam ga oss akkurat det vi kom for – shopping, byvandring og god stemning i kanalbyen. Christoffer fikk sine timer ...",
      fullText: "Amsterdam ga oss akkurat det vi kom for – shopping, byvandring og god stemning i kanalbyen. Christoffer fikk sine timer i byen, og alle var fornøyde da vi satte oss i bilen igjen.\n\nDerfra ble det en lang kjøredag sørover: Nederland, Belgia og inn i Frankrike – tre land på én dag! Vi landet til slutt på det koselige hotellet Domaine Malar, rett ved flyplassen Aérodrome d'Étampes-Mondésir, sør for Paris.\n\nRolig omgivelser etter en lang dag bak rattet. I morgen fortsetter vi videre sørover mot Loire-dalen og slottene som venter.\n\nGod natt fra Frankrike! 🇫🇷", image: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782680120/nszh8tdrmigif2jnv5u8.png",
      extraImages: [], featured: false,
    },
    {
      id: "post_1782626648471", date: "28. juni 2026", location: "Ringen, Tyskland",
      title: "Dag 2 – God morgen fra hestegården, kursen satt mot Amsterdam", excerpt: "God morgen fra hestegården i Ringe! Litt lyn og torden i natt, men ellers en fin og rolig overnatting før dag 2 av turen...",
      fullText: "God morgen fra hestegården i Ringe! Litt lyn og torden i natt, men ellers en fin og rolig overnatting før dag 2 av turen.\n\nI dag setter vi kursen mot Amsterdam, der Christoffer endelig får sine 3-4 timer i byen han har sett frem til. Kanaler, sykler og kanskje en stroopwafel eller to står på programmet.\n\nEtter Amsterdam fortsetter vi sørover gjennom Belgia og inn i Frankrike, med Orléans som mål for overnatting i kveld. En lang kjøredag venter, men spenningen er på topp – ny by, ny etappe!\n\nGod morgen fra Tyskland! ☀️", image: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782626627/vgfplekts25x44f6ix8z.jpg",
      extraImages: [], featured: false,
    },
    {
      id: "post_1782577740605", date: "27. juni 2026", location: "Sittensen, Tyskland",
      title: "Dag 1 - Foreløpige tall", excerpt: "Dag 1 på vei til Altea – tallene så langt ☀️🚗\n\nVi rullet ut fra Nannestad kl. 04:12, og Zeekr’en har gjort jobben:\n\n🛣️...",
      fullText: "Dag 1 på vei til Altea – tallene så langt ☀️🚗\n\nVi rullet ut fra Nannestad kl. 04:12, og Zeekr’en har gjort jobben:\n\n🛣️ 743,1 km unnagjort\n⏱️ 8t 4min kjøretid\n💨 95 km/t i snitt\n🔋 184,2 kWt brukt totalt (24,8 kWt/100 km)\n\nAkkurat nå står vi på lader og fyller på – 260 kW inn, fra 43 % og oppover. 27 minutter, så er vi klare for neste etappe. 238 km rekkevidde allerede på skjermen.\n\nÅr tre med denne turen, og bilen sluker Europa-asfalten som om ingenting. 🇪🇸", image: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782577721/yromlsxtdprnqk5jsfas.jpg",
      extraImages: [], featured: false,
    },
    {
      id: "post_1782536744065", date: "27. juni 2026", location: "Larvik",
      title: "Dag 1 - Larvik til Hirtshals", excerpt: "Første etappe i boks! Vi har rullet fra Nannestad ned til Larvik – 185,5 km på 2 timer og 9 minutter kjøretid. Nå står v...",
      fullText: "Første etappe i boks! Vi har rullet fra Nannestad ned til Larvik – 185,5 km på 2 timer og 9 minutter kjøretid. Nå står vi i kø for å kjøre ombord på SuperSpeed 2. Fire timer over Skagerrak, og så er vi i Hirtshals.\n\nZeekr-en har taklet de første kilometerne uten problemer – god plass til fire personer og bagasje. Forbruket har ligget på 44,2 kWh over 185,5 km, som blir omtrent 24 kWh/100 km. Litt over WLTP-tallene, men helt forventet med motorvei og fullpakket bil. Lovende start!\n\nNeste stopp: Hirtshals, og videre ned gjennom Danmark mot Tyskland. Ringe venter i kveld!", image: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782536740/meprmgfipqemzsvt3mjt.png",
      extraImages: [], featured: false,
    },
    {
      id: "post_1782073603715", date: "21. juni 2026", location: "Nannestad, Norge",
      title: "Mot Altea, tredje gang, ny bil, samme leilighet!", excerpt: "Kun kort tid til avreise og siste finpuss på det tekniske. Ladekablene er pakket, ruta er planlagt (en ny en, som alltid...",
      fullText: "Kun kort tid til avreise og siste finpuss på det tekniske. Ladekablene er pakket, ruta er planlagt (en ny en, som alltid – vi har aldri kjørt samme vei to ganger), og bilen er klar for sin første store prøve sørover.\n\nFor i år bytter vi hest i løpet: det er ikke Marias Xpeng G9 som skal kjøre oss til Spania, men min nye Zeekr 7X. Spennende å se hvordan den takler turen.\n\nTore, Maria, Christoffer og Charlotte ruller sørover. Caroline blir hjemme og jobber – og dermed mister vi vår innebygde shoppingradar. Ingen som peker ut \"den butikken der ser spennende ut\" når vi kjører gjennom en by denne gangen.\n\nReisemålet er som vanlig: leiligheten som mamma og Pål eier i Altea. Vi vet hvor nøklene henger, hvor de beste tomatene er, og at balkongen er perfekt for en kald drikke etter en lang kjøretur.\n\nNy bil, ny rute, samme deilige reisemål. Caroline – vi tar bilder!\n\nGod sommer! ☀️", image: "bilder/0C041B0E-8176-44FA-8688-B738D83F110D.png",
      extraImages: [], featured: true,
    }
  ],

  photos: [
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782729089/hg3d6eovhtr2yxq5xblu.jpg", caption: "" },
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782719795/ct6j2iqqk9dp3zc5hg4v.png", caption: "Hotel Mondesir" },
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782587464/kqpceuvhhcvagfeke2q8.jpg", caption: "Middag i meppen" },
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782554035/dv7uwhpfopdzbnkirpws.jpg", caption: "Sjøluft" },
    { src: "https://res.cloudinary.com/daakblz3f/image/upload/f_auto,q_auto,w_1600/v1782553970/fnpnewpoyrsnhq2zmyot.jpg", caption: "Rett ved Hirtshals" },
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