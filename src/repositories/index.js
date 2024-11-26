const AirplaneRepository = require('./airplane.repository');
const AirportRepository = require('./airport.repository');

module.exports = {
CityRepository : require('./city.repository'),
AirplaneRepository,
FlightRepository : require('./flight.repository'),
AirportRepository
}