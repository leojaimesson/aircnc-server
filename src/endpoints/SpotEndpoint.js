const multer = require("multer");
const router = require("express").Router();
const UploadConfig = require("../configs/Upload");
const SpotController = require("../controllers/SpotController");
const BookingController = require("../controllers/BookingController");
const upload = multer(UploadConfig);

module.exports = application => {
  router.post("/", upload.single("thumbnail"), SpotController.create)
  router.post("/:id/bookings", BookingController.create);
  router.get("/listByTech", SpotController.listByTech);
  application.use("/spots", router);
};
