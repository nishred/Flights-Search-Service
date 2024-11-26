const { AirportService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const airportService = new AirportService();

async function createAirport(req, res) {
  try {
    const airport = await airportService.create(req.body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: airport,
      message: "Airport created successfully",
      error: {},
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Airport creation failed",
      error: err.message,
    });
  }
}



module.exports = {

  createAirport

}
