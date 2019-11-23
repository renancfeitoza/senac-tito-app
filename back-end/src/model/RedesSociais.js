const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const RedesSociais = sequelize.define("redesSociais", {
    usuarioRedeSocial: {
        type: Sequelize.STRING(45),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nomeRedeSocial: {
        type: Sequelize.STRING(25),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "usuarios",
            key: "id"
        }
    }
})

// Aluno.sync({ force: true });

module.exports = RedesSociais;