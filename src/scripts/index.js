const api = {
  key: "d3e762b7515d7184e5b7fb330d373dc5",
  base: "https://api.openweathermap.org/data/2.5/",
};

// Year for Copyright
const year = new Date();
const setYear = document.querySelector(".year");
const getFullYear = year.getFullYear();
setYear.innerHTML = getFullYear;
// Current date
const date = document.querySelector(".date");

const getDayName = () => {
  return year.toLocaleDateString("en-US", { weekday: "long" });
};
const getTime = () => {
  return year.toLocaleDateString("en-US", { day: "numeric" });
};
const getMonthName = () => {
  return year.toLocaleDateString("en-US", { month: "long" });
};

date.innerHTML = `${getDayName()} ${getTime()} ${getMonthName()} ${getFullYear}`;

// searchbox eventlistenr & keypress
const searchBox = window.document.querySelector(".search-box");
const city = document.querySelector(".city");

searchBox.addEventListener("keypress", pressEnter);
function pressEnter(event) {
  if (event.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(
    `${api.base}weather?q=${query}&dt=1618308000&units=metric&APPID=${api.key}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults)
    .catch((err) => alert("Please type an existing city name"));
}
type;

function displayResults(weather) {
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  console.log(weather);

  //Getting weather basic information
  let temp = document.querySelector(".tempN");
  temp.innerHTML = `${Math.round(weather.main.temp)}`;

  let weather_el = document.querySelector(".weather");

  weather_el.innerText = weather.weather[0].main;

  //Wind Information
  let wind = document.querySelector(".windDeg");
 // wind.innerText = weather.wind.deg;
  
  //wind directions N,W,S,E
  /*function getWind() {
    var windDir = weather.wind.deg;
    console.log(windDir);

    if (windDir >= 310 && windDir <= 360) {
      wind.innerText = "N";
    }
    if (windDir >= 1 && windDir <= 50) {
      wind.innerText = "N";
    }
    if (windDir <= 309 && windDir >= 230) {
      wind.innerText = "W";
    }
    if (windDir <= 229 && windDir >= 130) {
      wind.innerText = "S";
    }
    if (windDir >= 129 && windDir <= 49) {
      wind.innerText = "E";
    }
  }
  getWind();*/
  //find the direction
  const windD = [
    { direction: "N", start: 310, end: 360 },
    { direction: "N", start: 1, end: 50 },
    { direction: "W", start: 230, end: 309 },
    { direction: "S", start: 130, end: 229 },
    { direction: "E", start: 49, end: 129 },
  ];
  var windDir = weather.wind.deg;
  const findDirection = windD.find(
    (dir) => dir.start <= windDir && dir.end >= windDir
  );
  console.log(findDirection.direction);
  wind.innerHTML = findDirection.direction;
  //

  let windSpeed = document.querySelector(".windSpeed");
  windSpeed.innerText = `${weather.wind.speed} km/h`;

  let windGust = document.querySelector(".windGust");
  if (weather.wind.gust) {
    windGust.innerText = `${weather.wind.gust} km/h`;
  }

  //Additional information
  let feelsLike = document.querySelector(".feels");
  feelsLike.innerText = `${Math.round(weather.main.feels_like)}`;

  let humidity = document.querySelector(".humidity");
  humidity.innerText = `Humidity ${weather.main.humidity}%`;

  //change the bgImg
  function changeBg() {
    let body = document.querySelector("body");
    var weatherDescription = weather.weather[0].main;

    switch (weatherDescription) {
      case (weatherDescription = "Clear"):
        body.style.backgroundImage = "url('../img/Clear1.jpg')";
        break;
      case (weatherDescription = "Clouds"):
        body.style.backgroundImage = "url('../img/Cloudy.jpeg')";
        break;
      case (weatherDescription = "Rain"):
        body.style.backgroundImage = "url('../img/Rain.jpg')";
        break;
      case (weatherDescription = "Sunny"):
        body.style.backgroundImage = "url('../img/Sunny.jpg')";
        break;
      case (weatherDescription = "Snow"):
        body.style.backgroundImage = "url('../img/snow.jpg')";
        break;
      default:
        body.style.backgroundImage = "url('../img/normalW.jpg')";
    }
  }
  changeBg();
  //night background image
  function nightBg() {
    let getHours = year.getHours();
    if (getHours >= 20 || getHours < 5) {
      const body = document.querySelector("body");
      body.style.backgroundImage = "url('../img/night-bg.jpg')";
    }
  }
  nightBg();
  //
  let hiLow = document.querySelector(".hi-low");
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;

  iconCode = weather.weather[0].icon;
  let iconLink = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  let image = document.querySelector("img");
  image.src = iconLink;
}
// default cities random
function randomCity() {
  const defaultCities = [
    "Leipzig",
    "Berlin",

    "Hamburg",
    "Hammamet",
    "Paris",
    "Madrid",
    "Damaskus",
    "London",
    "hamburg",
    "hammamet",
    "paris",
    "Madrid",
    "Damascus",
    "london",
  ];
  let city;
  for (let i = 0; i <= defaultCities.length; i++) {
    city = defaultCities[Math.floor(Math.random() * defaultCities.length)];
  }
  return city;
}

function defaultCity() {
  getResults(randomCity());
}
