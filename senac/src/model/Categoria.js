const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Categoria = sequelize.define("categoria", {
    nome: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: "generos",
            key: "id"
        }
    }
})

// Categoria.sync({ force: true });

module.exports = Categoria;