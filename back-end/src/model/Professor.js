const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Professor = sequelize.define("professor", {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
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
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            len: {
                args: [8, 15],
                msg: "Minimo 8 de letras , maximo de 15"
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
    },
    admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        },
        references: {
            model: "admins",
            key: "id"
        }
    }

});

// Professor.sync({ force: true });

module.exports = Professor;

