const express = require("express")

const airportRouter = express.Router()

const {AirportController} = require("../../controllers")    


airportRouter.post("/",AirportController.createAirport)



module.exports =airportRouter