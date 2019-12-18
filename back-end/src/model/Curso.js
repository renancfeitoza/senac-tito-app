const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Curso = sequelize.define("curso", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
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
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
        references: {
            model: "status",
            key: "id"
        }
    }
});

// Curso.sync({ force: true });

module.exports = Curso;

