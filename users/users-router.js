const router = require("express").Router();

const Users = require("./users-model.js");
const validateLogin = require("../auth/validateLogin.js");

router.get("/", validateLogin, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;