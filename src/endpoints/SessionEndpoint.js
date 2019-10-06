const router = require("express").Router();
const SessionController = require("../controllers/SessionController");

module.exports = application => {
  router.post("/", SessionController.create);
  application.use("/sessions", router);
};
