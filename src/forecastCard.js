import getAbbreviatedDayName from './abbriviatedDayName';

export default function forecastCard(date, iconURL, maxTemp, minTemp) {
  const component = document.createElement('div');
  component.className = 'forecast-card';

  const dateSpace = document.createElement('h3');
  dateSpace.className = 'day';
  dateSpace.textContent = getAbbreviatedDayName(date);
  // 2023-11-07 00:00

  const icon = document.createElement('div');
  icon.className = 'forecastIcon-div';
  const weatherIcon = document.createElement('img');
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.className = 'forecast-icon';
  icon.appendChild(weatherIcon);

  const tempDiv = document.createElement('div');
  tempDiv.className = 'forecast-temp';

  const maxTempDiv = document.createElement('h2');
  maxTempDiv.className = 'max-temp';
  maxTempDiv.textContent = maxTemp;

  const minTempDiv = document.createElement('h2');
  minTempDiv.className = 'min-temp';
  minTempDiv.textContent = minTemp;

  tempDiv.appendChild(maxTempDiv);
  tempDiv.appendChild(minTempDiv);

  component.appendChild(dateSpace);
  component.appendChild(icon);
  component.appendChild(tempDiv);
  return component;
}
