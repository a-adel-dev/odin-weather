import toggleButton from './toggle';
import searchArea from './searchArea';
import getWeatherData from './weather';
import mainWeatherDataView from './mainWeatherDataView';

export default async function renderApp(appSettings) {
  document.body.innerHTML = '';
  document.body.appendChild(toggleButton(appSettings));
  document.body.appendChild(searchArea(appSettings));
  if (appSettings.getLocation().length > 0) {
    if (appSettings.getDirty()) {
      const data = await getWeatherData(appSettings);
      appSettings.setWeatherData(data);
      appSettings.clearDirty();
      console.log(data);
    }
    document.body.appendChild(mainWeatherDataView(appSettings));
  }
}
