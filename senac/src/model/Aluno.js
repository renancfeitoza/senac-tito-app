const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Aluno = sequelize.define("aluno", {
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
    dt_nasc: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "turmas",
            key: "id"
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
})

// Aluno.sync({ force: true });

module.exports = Aluno;