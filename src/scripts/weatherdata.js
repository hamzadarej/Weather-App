const year = new Date().getFullYear();
const setYear = document.querySelector('.year');
setYear.innerHTML = year;

function changeBg() {
  let temp = document.querySelector('.tempN').innerHTML;
  let body = document.querySelector('body');

  if (temp > 15) {
    body.style.backgroundImage = 'url(\'images/sunny.jpeg\')';
  }
  if (temp < 15 && temp > 10) {
    body.style.backgroundImage = 'url(\'images/Cloudy.jpeg\')';
  }
}

const conf = {

  // root: '.nav-primary',
};

function getNodes() {

  // const root = document.querySelector(conf.root);

  return {
    // menuControl,
  };
}

async function getApiData() {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=Berlin,de&units=metric&appid=f0e7493e8af1e6452647e0dd9be154e2';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
  // api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
  // f0e7493e8af1e6452647e0dd9be154e2;
}

async function renderUsers() {
  let weather = await getApiData();
  console.dir(weather);
}

function init() {

  const dom = getNodes();
  renderUsers();

  changeBg();
}

export { init };
