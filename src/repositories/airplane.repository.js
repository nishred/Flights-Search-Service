const { Airplane } = require("../models");

class AirplaneRepository {
  async getAirplane(id) {
    const airplane = await Airplane.findByPk(id);

    return airplane;
  }
}


module.exports = AirplaneRepository;
