const status = require("http-status");
const DashboardService = require("../services/DashboardService");

const list = async (request, response) => {
  try {
    const spots = await DashboardService.list(request);
    response.status(status.OK).json(spots);
  } catch (error) {
    response.status(status.BAD_REQUEST).json(error);
  }
};

module.exports = { list };
