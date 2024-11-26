const e = require("express");
const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const flightService = new FlightService();

async function createFlight(req, res) {
  const { body } = req;
  try {
    const flight = await flightService.createFlight(body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      data: flight,
      message: "Flight created successfully",
      error: {},
    });
  } catch (error) {


    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Flight not created",
      error: error.message,
    });
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await flightService.getAllFlights(req.query);

    res.status(StatusCodes.OK).json({
      success: true,
      data: flights,
      message: "Flights fetched successfully",
      error: {},
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Flights not fetched",
      error: err.message,
    });
  }
}

module.exports = {
  createFlight,
  getAllFlights
};
