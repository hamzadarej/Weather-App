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
