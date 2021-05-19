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

//Change background depend of the Temperature
function changeBg() {
  let temp = document.querySelector(".tempN").innerHTML;
  let body = document.querySelector("body");

  if (temp > 15) {
    body.style.backgroundImage = "url('images/sunny.jpeg')";
  }
  if (temp < 15 && temp > 10) {
    body.style.backgroundImage = "url('images/Cloudy.jpeg')";
  }
}
changeBg();

// searchbox eventlistenr & keypress

const searchBox = document.querySelector(".search-box");
const city = document.querySelector(".city");

searchBox.addEventListener("keypress", pressEnter);
function pressEnter(event) {
  if (event.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  console.log(weather);

  let temp = document.querySelector(".tempN");
  temp.innerHTML = `${Math.floor(weather.main.temp)}`;

  let weather_el = document.querySelector(".weather");
  weather_el.innerText = weather.weather[0].main;

  let hiLow = document.querySelector(".hi-low");
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;

  iconCode = weather.weather[0].icon;

  let iconLink = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  let image = document.querySelector("img");

  image.src = iconLink;
}
