const dotenv = require('dotenv');
const StartMongo = require("./configs/Mongo");
const application = require("./configs/Express");

dotenv.config();

StartMongo(process.env.MONGO_URI);

application.listen(process.env.SERVER_PORT);
