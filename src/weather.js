const apiKey = 'b8f0840984e340018bb144353230607';

const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=london&days=3`;

export default async function getWeatherData() {
  try {
    const rawData = await fetch(forecastURL);
    const weatherData = await rawData.json();
    return weatherData;
  } catch (error) {
    console.log('error');
    return null;
  }
}
