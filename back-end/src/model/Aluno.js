const Sequelize = require("sequelize");
const sequelize = require("../config/database");


const Aluno = sequelize.define("aluno", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    senha:{
        type: Sequelize.STRING(64),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    
});

//Aluno.sync({ force: true });

module.exports = Aluno;

