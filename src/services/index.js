const airport = require("../models/airport");
const AirportService = require("./airport.service");

module.exports = {
  CityService: require("./city.service"),
  FlightService : require("./flight.service"),
  AirportService
};
