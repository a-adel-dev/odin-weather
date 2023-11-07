export default function hourlyCard(hour, iconURL, temp) {
  const component = document.createElement('div');
  component.className = 'hourly-card';

  const hourSpace = document.createElement('h3');
  hourSpace.className = 'hour';
  hourSpace.textContent = hour.substring(hour.length - 5);
  // 2023-11-07 00:00

  const icon = document.createElement('div');
  icon.className = 'hourly-div';
  const weatherIcon = document.createElement('img');
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.className = 'hourly-icon';
  icon.appendChild(weatherIcon);

  const tempDiv = document.createElement('div');
  tempDiv.className = 'temp';
  tempDiv.textContent = temp;

  //   const maxTemp = document.createElement('div');
  //   maxTemp.className = 'max-temp';
  //   maxTemp.textContent = max;

  //   const minTemp = document.createElement('div');
  //   minTemp.className = 'min-temp';
  //   minTemp.textContent = min;

  //   temp.appendChild(maxTemp);
  //   temp.appendChild(minTemp);

  component.appendChild(hourSpace);
  component.appendChild(icon);
  component.appendChild(tempDiv);
  return component;
}
