const express = require("express");
const helmet = require("helmet");

const Router = require("./api/router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", Router);

module.exports = server;