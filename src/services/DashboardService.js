const SpotModel = require("../models/Spot");

const list = async ({ header: { user } }) => {
  const spots = await SpotModel.find({ user });
  return spots;
};

module.exports = { list };
