const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const VinculoUsuario = sequelize.define("usuario", {
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
    },
    turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "turma",
            key: "id"
        }
    }
})

// Aluno.sync({ force: true });

module.exports = VinculoUsuario;