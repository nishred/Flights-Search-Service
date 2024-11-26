const express = require("express")

const {FlightController} = require("../../controllers/index")   

const flightRouter = express.Router()


flightRouter.post("/", FlightController.createFlight)

flightRouter.get("/", FlightController.getAllFlights)


module.exports = flightRouter


