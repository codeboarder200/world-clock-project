function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo-date");
    let currentTokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
    tokyoDateElement.innerHTML = currentTokyoDate;

    let tokyoTimeElement = document.querySelector("#tokyo-time");
    let currentTokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss");
    tokyoTimeElement.innerHTML = currentTokyoTime;

    let tokyoMarkerElement = document.querySelector("#tokyo-marker");
    let currentTokyoMarker = moment().tz("Asia/Tokyo").format("A");
    tokyoMarkerElement.innerHTML = currentTokyoMarker;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris-date");
    let currentParisDate = moment().tz("Europe/Paris").format("MMMM Do YYYY");
    parisDateElement.innerHTML = currentParisDate;

    let parisTimeElement = document.querySelector("#paris-time");
    let currentParisTime = moment().tz("Europe/Paris").format("h:mm:ss");
    parisTimeElement.innerHTML = currentParisTime;

    let parisMarkerElement = document.querySelector("#paris-marker");
    let currentParisMarker = moment().tz("Europe/Paris").format("A");
    parisMarkerElement.innerHTML = currentParisMarker;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone).format("h:mm:ss");
  let cityMarker = moment().tz("Europe/Paris").format("A");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
          <div class="city-date">
            <h2 class="name-of-city">${cityName}</h2>
            <div class="date-of-city">${cityDate}</div>
          </div>
          <div class="time-of-city">
            <span>${cityTime}</span>
            <span class="meridiem-markers">${cityMarker}</span>
          </div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
