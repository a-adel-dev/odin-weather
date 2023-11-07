import toggleButton from './toggle';
import searchArea from './searchArea';
import getWeatherData from './weather';
import mainWeatherDataView from './mainWeatherDataView';
import hourlyContainer from './hourlyContainer';

export default async function renderApp(app) {
  console.log('rendering app');
  document.body.innerHTML = '';
  document.body.appendChild(toggleButton(app, renderApp));
  document.body.appendChild(searchArea(app, renderApp));
  if (app.getLocation().length > 0) {
    let weatherData;
    if (app.getRequestingState()) {
      weatherData = await getWeatherData(app);
      document.body.appendChild(
        mainWeatherDataView(weatherData, app.getImperial())
      );
      const hourlyComponent = hourlyContainer(weatherData, app.getImperial());
      document.body.appendChild(hourlyComponent);
    }
  }
}
