const router = require("express").Router();
const DashboardController = require("../controllers/DashboardController");

module.exports = application => {
  router.get("/", DashboardController.list);
  application.use("/dashboard", router);
};
