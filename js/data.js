// Oppdatert: 12.6.2026, 00:47:08
const TRIP_DATA = {

  glympse: {
    active: true,
    url:    "https://maps.app.goo.gl/SHXzwAi5Z1nBSWbXA",
  },

  status: {
    text:     "Forbereder avreise",
    location: "Nannestad, Norge",
    day:      "Dag 0 av 4",
    nextStop: "Larvik havn → Ringe, Tyskland",
    kmDriven: 0,
    isLive:   true,
  },

  currentPosition: {
    lat:   60.2453,
    lng:   11.0371,
    label: "Nannestad",
  },

  routeStops: [
    { label: "Nannestad", state: "current" },
    { label: "Hirtshals", state: "" },
    { label: "Ringe", state: "" },
    { label: "Amsterdam", state: "" },
    { label: "Loire", state: "" },
    { label: "Bordeaux", state: "" },
    { label: "Altea", state: "" }
  ],

  posts: [

  ],

  photos: [

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
};