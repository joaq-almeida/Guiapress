const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "admin", "password", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;