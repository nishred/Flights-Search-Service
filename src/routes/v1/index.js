const express = require("express");

const router = express.Router();

const cityRouter = require("./city.routes");
const flightRouter = require("./flight.routes");

const airportRouter = require("./airport.routes");

router.use("/cities", cityRouter);

router.use("/flights", flightRouter);

router.use("/airports", airportRouter);

module.exports = router;
