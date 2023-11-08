import toggleButton from './toggle';
import searchArea from './searchArea';
import getWeatherData from './weather';
import mainWeatherDataView from './mainWeatherDataView';
import hourlyContainer from './hourlyContainer';
import forecastContainer from './forecastContainer';

export default async function renderApp(app) {
  document.body.innerHTML = '';
  document.body.appendChild(toggleButton(app, renderApp));
  document.body.appendChild(searchArea(app, renderApp));
  if (app.getLocation().length > 0) {
    let weatherData;
    if (app.getRequestingState()) {
      weatherData = await getWeatherData(app);
      if (typeof weatherData === 'string') {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error';
        errorMessage.textContent = weatherData;
        document.body.append(errorMessage);
      } else {
        document.body.appendChild(
          mainWeatherDataView(weatherData, app.getImperial())
        );
        const hourlyComponent = hourlyContainer(weatherData, app.getImperial());
        document.body.appendChild(hourlyComponent);
        const forecast = forecastContainer(weatherData, app.getImperial());
        document.body.appendChild(forecast);
      }
    }
  }
}
