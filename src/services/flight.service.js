const { FlightRepository, AirplaneRepository } = require("../repositories");

const { compareDates } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareDates(data.arrivalTime, data.departureTime))
        throw new Error("Departure time must be before arrival time");

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (err) {
      console.log("Error in service");
      throw err;
    }
  }

  async getAllFlights(filter) {
    const flights = await this.flightRepository.getFlights(filter);

    return flights;
  }
}

module.exports = FlightService;
