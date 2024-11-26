const express = require("express");

const router = express.Router();

const cityRouter = require("./city.routes");
const flightRouter = require("./flight.routes");

router.use("/cities", cityRouter);

router.use("/flights", flightRouter);

module.exports = router;
