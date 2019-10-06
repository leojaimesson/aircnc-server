const status = require("http-status");
const SpotService = require("../services/SpotService");

const listByTech = async (request, response) => {
  try {
    const spots = await SpotService.listByTech(request);
    response.status(status.OK).json(spots);
  } catch (error) {
    response.status(status.BAD_REQUEST).json(error);
  }
}

const create = async (request, response) => {
  try {
    const spot = await SpotService.create(request);
    response.status(status.OK).json(spot);
  } catch (error) {
    response.status(status.BAD_REQUEST).json(error);
  }
};

module.exports = { create, listByTech };
