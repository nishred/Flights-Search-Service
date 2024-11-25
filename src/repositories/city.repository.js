const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async getCities(filter) {
    try {
      let cities;

      if (!filter) cities = await City.findAll();
      else {
        cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter,
            },
          },
        });
      }

      return cities;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }
  async createCity({ name }) {
    try {
      const city = await City.create({ name });

      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async deleteCity(id) {
    try {
      const city = await City.destroy({ where: { id } });
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async updateCity(id, { name }) {
    try {
      // const city = await City.update({ name }, { where: { id } });
      // return city;

      const city = await City.findByPk(id);
      city.name = name;
      await city.save();

      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }

  async getCity(id) {
    try {
      const city = await City.findByPk(id);
      return city;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }
}

module.exports = CityRepository;
