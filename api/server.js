const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dbConnection = require("../data/db-config.js");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

const sessionConfig = {
    name: "CTFcookie01",
    secret: process.env.SESSION_SECRET || "Secret-String",
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 12000000
    })
};
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;