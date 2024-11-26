const { Flight } = require("../models");

const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if(data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and]: [
    //             { price: {[Op.lte]: data.maxPrice} },
    //             { price: {[Op.gte]: data.minPrice} }
    //         ]
    //     })
    // }
    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
    console.log(filter);
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);

      return flight;
    } catch (err) {
      console.log("Error in repository");

      console.log(err);
      throw err;
    }
  }

  async getFlight(id) {
    const flight = await Flight.findByPk(id);

    return flight;
  }

  async getFlights(filter) {
    const flights = await Flight.findAll({
      where: this.#createFilter(filter),
    });

    return flights;
  }
}

module.exports = FlightRepository;
