const db = require("../data/db-config");

function get() {
    return db("users");
}

function getById(id) {
    return db("users").where({ id });
}

function add(user) {
    return db("users").insert(user);
}

module.exports = {
    get,

    getById,

    add
};