const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Status = sequelize.define("statu", {
    status: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

// Status.sync({ force: true });

module.exports = Status;

