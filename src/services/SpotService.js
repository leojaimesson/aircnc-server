const SpotModel = require("../models/Spot");

const listByTech = async ({ body: { tech } }) => {
  const techs = await SpotModel.find({ techs: tech });
  return techs;
};

const create = async ({
  body: { company, price, techs },
  header: { user },
  file: { filename }
}) => {
  const spot = await SpotModel.create({
    thumbnail: filename,
    company,
    price,
    techs: techs.split(",").map(tech => tech.trim()),
    user
  });

  return spot;
};

module.exports = { create, listByTech };
