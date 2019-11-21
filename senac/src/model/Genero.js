const Sequelize = require('sequelize');
const sequelize = require('../config/database');



const Genero = sequelize.define("genero", {
    nome: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

// Genero.sync({ force: true });

module.exports = Genero;
