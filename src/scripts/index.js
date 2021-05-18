// Year for Copyright
const year = new Date();
const setYear = document.querySelector(".year");
const getFullYear =year.getFullYear()
setYear.innerHTML = getFullYear;
// Current date
const date = document.querySelector(".date");

const getDayName = () => {
  return year.toLocaleDateString('en-US', { weekday: "long" });
};
const getTime = () => {
  return year.toLocaleDateString('en-US', { day: "numeric" });
};
const getMonthName = () => {
  return year.toLocaleDateString('en-US', { month: "long" });
};

date.innerHTML=`${getDayName()} ${getTime()} ${getMonthName()} ${getFullYear}`;



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
// searchbox addEventlistener & keypress
const searchBox =document.querySelector(".search-box");
const city =document.querySelector(".city");

searchBox.addEventListener("keypress",pressEnter);
function pressEnter(event){
  if(event.keyCode ==13){
    city.innerHTML=searchBox.value
    
  }
}

