const { CityService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const cityService = new CityService();

async function createCity(req, res, next) {
  try {
    const city = await cityService.createCity(req.body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: city,
      message: "City Created Successfully",
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

async function getCities(req, res, next) {
  try {
    const cities = await cityService.getCities();

    res.status(StatusCodes.OK).json({
      success: true,
      data: cities,
      message: "Cities fetched successfully",
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

async function getCity(req, res, next) {
  try {
    const city = await cityService.getCity(req.params.id);

    res.status(StatusCodes.OK).json({
      success: true,
      data: city,
      message: "City fetched successfully",
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

async function updateCity(req, res, next) {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);

    res.status(StatusCodes.OK).json({
      success: true,
      data: city,
      message: "City updated successfully",
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

async function deleteCity(req, res, next) {
  try {
    const city = await cityService.deleteCity(req.params.id);

    res.status(StatusCodes.OK).json({
      success: true,
      data: city,
      message: "City deleted successfully",
      error: {},
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity
};
