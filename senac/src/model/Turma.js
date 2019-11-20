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
    dt_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    dt_termino: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    documentos_necessarios: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "cursos",
            key: "id"
        }
    }

})

// Turma.sync({ force: true });

module.exports = Turma;