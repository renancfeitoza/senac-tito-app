const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Aluno = sequelize.define("aluno", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Esse campo precisa ser um email"
            },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    senha:{
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: {
                args: [8, 15],
                msg: "Minimo 8 de letras , maximo de 15"
            },
           notEmpty: {
            msg: "Esse campo não pode ser vazio"
            }
        }
    }
    
});

// Aluno.sync({ force: true });

module.exports = Aluno;

