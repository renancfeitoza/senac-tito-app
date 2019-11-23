const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Turma = sequelize.define("turma", {
    nome: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
})

// Turma.sync({ force: true });

module.exports = Turma;