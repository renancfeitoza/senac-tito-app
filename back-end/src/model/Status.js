const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Status = sequelize.define("statu", {
    status: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    }
});

// Status.sync({ force: true });

module.exports = Status;

