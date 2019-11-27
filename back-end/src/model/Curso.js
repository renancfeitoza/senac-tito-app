const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Curso = sequelize.define("curso", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "professors",
            key: "id"
        }
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "status",
            key: "id"
        }
    }
});

// Curso.sync({ force: true });

module.exports = Curso;

