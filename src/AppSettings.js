class AppSettings {
  constructor() {
    this.apiKey = 'b8f0840984e340018bb144353230607';
    this.imperial = false;
    this.location = '';
    this.data = null;
    this.dirty = false;
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

  getWeatherData() {
    return this.data;
  }

  getDirty() {
    return this.dirty;
  }

  setDirty() {
    this.dirty = true;
  }

  clearDirty() {
    this.dirty = false;
  }
}

export default AppSettings;
