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
const searchBox =document.querySelector(".search-box");
const city =document.querySelector(".city");

searchBox.addEventListener("keypress",pressEnter);
function pressEnter(event){
  if(event.keyCode ==13){
    city.innerHTML=searchBox.value
    
  }
}

