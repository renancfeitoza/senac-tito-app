const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Profile = sequelize.define("profile", {
    profile: {
        type: Sequelize.STRING(75),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

//Profile.sync({ force: true });

module.exports = Profile;