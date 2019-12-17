const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define("profile", {
    nameProfile: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

//Profile.sync({ force: true });

module.exports = Profile;

