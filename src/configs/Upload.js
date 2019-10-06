const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads"),
  filename: (request, file, callback) => {
    callback(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

module.exports = { storage };
