export default function mainWeatherDataView(appSettings) {
  const data = appSettings.getWeatherData();
  const component = document.createElement('div');
  component.className = 'weather-card';

  const icon = document.createElement('div');
  icon.className = 'weather-div';
  //   icon.textContent = data.icon; // You can replace this with an actual weather icon.
  const weatherIcon = document.createElement('img');
  const iconURL = data.current.condition.icon;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.className = 'weather-icon';
  icon.appendChild(weatherIcon);

  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  const tempC = data.current.temp_c;
  const tempf = data.current.temp_f;

  temperature.textContent = appSettings.getImperial()
    ? `${tempf}°f`
    : `${tempC}°C`;

  const location = document.createElement('div');
  location.className = 'location';
  location.textContent = data.location.name;

  const description = document.createElement('div');
  description.className = 'description';
  description.textContent = data.current.condition.text;

  component.appendChild(icon);
  component.appendChild(temperature);
  component.appendChild(location);
  component.appendChild(description);

  return component;
}
