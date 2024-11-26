const { z } = require("zod");

const { StatusCodes } = require("http-status-codes");

//  flightNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
//       airplaneId: { type: DataTypes.INTEGER, allowNull: false },
//       departureAirportId: { type: DataTypes.INTEGER, allowNull: false },
//       arrivalAirportId: { type: DataTypes.INTEGER, allowNull: false },
//       departureTime: { type: DataTypes.DATE, allowNull: false },
//       arrivalTime: { type: DataTypes.DATE, allowNull: false },
//       price: { type: DataTypes.INTEGER, allowNull: false },
//       boardingGate: { type: DataTypes.STRING},
//       totalSeats: { type: DataTypes.INTEGER, allowNull: false },

function validateCreateFlight(req, res, next) {
  const flightSchema = z
    .object({
      flightNumber: z.string(),
      airplaneId: z.number().int(),
      departureAirportId: z.number().int(),
      arrivalAirportId: z.number().int(),
      departureTime: z
        .string()
        .refine((val) => !isNaN(new Date(val).getTime()), {
          message: "Invalid date format", // Custom error message
        }),
      arrivalTime: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
        message: "Invalid date format", // Custom error message
      }),
      price: z.number().int(),
      boardingGate: z.string().optional(),
      totalSeats: z.number().int(),
    })
    .passthrough();

  try {
    const parsedCreateFlight = flightSchema.parse(req.body);

    const createFlight = {};

    const keys = [
      "flightNumber",
      "airplaneId",
      "departureAirportId",
      "arrivalAirportId",
      "departureTime",
      "arrivalTime",
      "price",
      "boardingGate",
      "totalSeats",
    ];

    keys.forEach((key) => {
      createFlight[key] = parsedCreateFlight[key];
    });

    req.body = createFlight;

    next();
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Invalid data",
      error: err.errors,
    });
  }
}

module.exports = {
  validateCreateFlight,
};
