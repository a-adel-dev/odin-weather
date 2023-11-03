const apiKey = 'b8f0840984e340018bb144353230607';
const requestURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=london`;
export default async function getWeatherData() {
  try {
    const rawData = await fetch(requestURL);
    const weatherData = await rawData.json();
    return weatherData;
  } catch (error) {
    console.log('error');
    return null;
  }
}
