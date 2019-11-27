const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define("admin", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    senha: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    area: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    telefone: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    profile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "profiles",
            key: "id"
        }

    }
});

// Admin.sync({ force: true });

module.exports = Admin;

