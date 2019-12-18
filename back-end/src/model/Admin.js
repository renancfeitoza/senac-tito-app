const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define("admin", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            is: /^[a-z]+$/i,
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    email: {
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
    senha: {
        type: Sequelize.STRING(100),
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
    },
    area: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            len: {
                args: [10, 50],
                msg: "Minimo 10 de caracteres e maximo de 50"
            }
        }
    },
    telefone: {
        type: Sequelize.CHAR(16),
        allowNull: false,
        validate: {
            is: {
                args: /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
                msg: "Telefone invalido"
             },
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    profile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
        references: {
            model: "profiles",
            key: "id"
        }
    }
});

//Admin.sync({ force: true });

module.exports = Admin;
