const { CityRepository } = require("../repositories");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async getCities() {
    try {
      const cities = await this.cityRepository.getCities();

      return cities;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async getCity(id) {
    try {
      const city = await this.cityRepository.getCity(id);
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await this.cityRepository.updateCity(id, data);
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async deleteCity(id) {
    try {
      const city = await this.cityRepository.deleteCity(id);
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }
}

module.exports = CityService;
