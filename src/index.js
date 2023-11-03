import './style.css';
import getWeatherData from './weather';

function component() {
  const element = document.createElement('p');
  const data = getWeatherData();
  console.log(data);
  element.innerHTML = data.location.name;
  return element;
}

document.body.appendChild(component());
