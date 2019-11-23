const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Usuario = sequelize.define("usuario", {
    nome: {
        type: Sequelize.STRING(75),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING(75),
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
            model: "profile",
            key: "id"
        }
    },
    token: {
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

// Aluno.sync({ force: true });

module.exports = Usuario;