const status = require("http-status");
const BookingService = require("../services/BookingService");

const create = async (request, response) => {
  try {
    const booking = await BookingService.create(request);
    response.status(status.OK).json(booking);
  } catch (error) {
    response.status(status.BAD_REQUEST).json(error);
  }
};

module.exports = { create };
