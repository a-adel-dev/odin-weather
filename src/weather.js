const apiKey = 'b8f0840984e340018bb144353230607';

export default async function getWeatherData(appSettings) {
  const location = appSettings.getLocation();
  const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`;
  try {
    const rawData = await fetch(forecastURL);
    const weatherData = await rawData.json();
    return weatherData;
  } catch (error) {
    console.log('error');
    return null;
  }
}
