import './style.css';
import getWeatherData from './weather';
import searchArea from './searchArea';
import toggleButton from './toggle';
import AppSettings from './appSettings';

async function getLocation() {
  const element = document.createElement('p');
  const data = await getWeatherData();
  console.log(data);
  element.innerHTML = data.location.name;
  document.body.appendChild(element);
}

const appSettings = new AppSettings();

function renderPage() {
  document.body.appendChild(toggleButton());
  document.body.appendChild(searchArea());
}

renderPage();

// getLocation();

// location
// temp now
// temp high (c/f)
// temp low (c/f)
// feels like (c/f)
// condition (heavy rain at times)
// wind (kph/mph)
// wind direction
// humedity
// last updated

// forcast
// min temp/ max temp
// condition
