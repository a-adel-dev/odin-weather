class AppSettings {
  constructor() {
    this.apiKey = 'b8f0840984e340018bb144353230607';
    this.units = 'metric';
    this.location = '';
  }

  setUnits(units) {
    this.units = units;
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
}

export default AppSettings;
