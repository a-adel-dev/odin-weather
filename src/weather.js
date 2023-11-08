const apiKey = 'b8f0840984e340018bb144353230607';

export default async function getWeatherData(location) {
  const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.location}&days=3`;
  try {
    const rawData = await fetch(forecastURL);
    const weatherData = await rawData.json();
    if (rawData.status === 400) {
      return weatherData.error.message;
    }
    return weatherData;
  } catch (error) {
    console.log('error');
    return null;
  }
}
