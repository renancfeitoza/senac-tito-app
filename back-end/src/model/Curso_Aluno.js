const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Curso_aluno = sequelize.define("curso_aluno", {
    curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
        references: {
            model: "cursos",
            key: "id"
          }
    },
    aluno:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
        references: {
            model: "alunos",
            key: "id"
          }
    },
    unique:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    }
   
});

// Curso_aluno.sync({ force: true });

module.exports = Curso_aluno;

