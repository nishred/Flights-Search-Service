const express = require("express");

const { FlightController } = require("../../controllers/index");

const { FlightMiddleware } = require("../../middlewares");

const flightRouter = express.Router();

flightRouter.post("/", FlightController.createFlight);

flightRouter.get(
  "/",
  FlightMiddleware.validateCreateFlight,
  FlightController.getAllFlights
);

module.exports = flightRouter;
