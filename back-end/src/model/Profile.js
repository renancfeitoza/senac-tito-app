const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define("profile", {
    nameProfile: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    token_profile:{
        type: Sequelize.STRING(100)
    }
});

// Profile.sync({ force: true });

module.exports = Profile;

