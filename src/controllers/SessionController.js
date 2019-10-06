const status = require('http-status');
const SessionService = require("../services/SessionService");

const create = async (request, response) => {
  try {
    const user = await SessionService.create(request);
    response.status(status.OK).json(user);
  } catch (error) {
    response.status(status.BAD_REQUEST).json(error);
  }
};

module.exports = { create };
