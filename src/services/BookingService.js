const BookingModel = require("../models/Booking");

const create = async ({
  params: { id },
  headers: { user },
  body: { date }
}) => {
  const booking = await BookingModel.create({
    spot: id,
    user,
    date
  });
  return booking
    .populate("user")
    .populate("spot")
    .execPopulate();
};

module.exports = { create };
