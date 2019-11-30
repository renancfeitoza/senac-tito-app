const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Curso_aluno = sequelize.define("curso_aluno", {
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
    },
    aluno:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
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
            notEmpty: true
        }
    }
   
});

// Curso_aluno.sync({ force: true });

module.exports = Curso_aluno;

