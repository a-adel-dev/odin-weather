export default function mainWeatherDataView(data, imperial) {
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

  const textSection = document.createElement('div');
  textSection.className = 'main-text-section';

  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  const tempC = Math.round(data.current.temp_c);
  const tempf = Math.round(data.current.temp_f);

  temperature.textContent = imperial ? `${tempf}°f` : `${tempC}°C`;

  const location = document.createElement('div');
  location.className = 'location';
  location.textContent = data.location.name;

  const description = document.createElement('div');
  description.className = 'description';
  description.textContent = data.current.condition.text;

  component.appendChild(icon);
  textSection.appendChild(temperature);
  textSection.appendChild(location);
  textSection.appendChild(description);
  component.appendChild(textSection);

  return component;
}
