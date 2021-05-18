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

}

export { init };
