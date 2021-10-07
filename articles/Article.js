const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Articles = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Articles); // 1 = N
Articles.belongsTo(Category); // 1 = 1

//Articles.sync({force: true});

module.exports = Articles;