// selector and listener

const searchbox =
  // push Enter on keyboard function

  function setQuery(event) {};

// get results function

function getResults(query) {}

// Year for Copyright
const year = new Date().getFullYear();
const setYear = document.querySelector(".year");
setYear.innerHTML = year;

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

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", searchQuery);

function searchQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults() {}

function dateBuilder() {
  var today = new Date();

  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return date;
}
