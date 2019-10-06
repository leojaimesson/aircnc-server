const express = require("express");
const SessionEndpoint = require("../endpoints/SessionEndpoint");
const SpotEndpoint = require("../endpoints/SpotEndpoint");
const DashboardEndpoint = require("../endpoints/DashboardEndpoint");

const application = express();

application.use(express.json());

SessionEndpoint(application);
SpotEndpoint(application);
DashboardEndpoint(application);

module.exports = application;
