const UserModel = require("../models/User");

const create = async ({ body: { email } }) => {
  const user = await UserModel.create({
    email
  });
  return user;
};

module.exports = { create };
