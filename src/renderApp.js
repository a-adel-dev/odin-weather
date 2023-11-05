import toggleButton from './toggle';
import searchArea from './searchArea';
import getWeatherData from './weather';

export default async function renderApp(appSettings) {
  document.body.innerHTML = '';
  document.body.appendChild(toggleButton(appSettings));
  document.body.appendChild(searchArea(appSettings));
  if (appSettings.getLocation().length > 0) {
    const data = await getWeatherData(appSettings);
    appSettings.setWeatherData(data);
  }
}
