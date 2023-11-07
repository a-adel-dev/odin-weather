import getWeatherData from './weather';

class WeatherApp {
  constructor() {
    this.apiKey = 'b8f0840984e340018bb144353230607';
    this.imperial = false;
    this.location = '';
    this.data = null;
    this.requesting = false;
  }

  toggleUnits() {
    this.imperial = !this.imperial;
  }

  getImperial() {
    return this.imperial;
  }

  setLocation(location) {
    this.location = location;
  }

  getApiKey() {
    return this.apiKey;
  }

  getLocation() {
    return this.location;
  }

  setWeatherData(data) {
    this.data = data;
  }

  async getWeatherData() {
    if (!this.requesting) {
      return this.data;
    }
    this.data = await getWeatherData(this.location);
    this.clearRequesting();
    return this.data;
  }

  getDirty() {
    return this.dirty;
  }

  setRequestingState() {
    this.requesting = true;
  }

  clearRequesting() {
    this.requesting = false;
  }

  getRequestingState() {
    return this.requesting;
  }
}

export default WeatherApp;
