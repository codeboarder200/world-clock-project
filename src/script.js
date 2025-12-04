setInterval(() => {
  let tokyoDateElement = document.querySelector("#tokyo-date");
  let currentTokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoDateElement.innerHTML = currentTokyoDate;

  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let currentTokyoTime = moment().tz("Asia/tokyo").format("h:mm:ss");
  tokyoTimeElement.innerHTML = currentTokyoTime;

  let tokyoMarkerElement = document.querySelector("#tokyo-marker");
  let currentTokyoMarker = moment().tz("Asia/tokyo").format("A");
  tokyoMarkerElement.innerHTML = currentTokyoMarker;
}, 1000);

setInterval(() => {
  let parisDateElement = document.querySelector("#paris-date");
  let currentParisDate = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  parisDateElement.innerHTML = currentParisDate;

  let parisTimeElement = document.querySelector("#paris-time");
  let currentParisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  parisTimeElement.innerHTML = currentParisTime;

  let parisMarkerElement = document.querySelector("#paris-marker");
  let currentParisMarker = moment().tz("Europe/Paris").format("A");
  parisMarkerElement.innerHTML = currentParisMarker;
}, 1000);
