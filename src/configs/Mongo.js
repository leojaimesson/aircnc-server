const mongoose = require("mongoose");

const run = connection => {
  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

module.exports = run;
