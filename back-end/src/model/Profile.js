const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define("profile", {
    nameProfile: {
        type: Sequelize.STRING(100),
        //allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            len: {
                args: [8, 15],
                msg: "Minimo 8 de letras , maximo de 15"
            }
        }
    }
});

 //Profile.sync({ force: true });

module.exports = Profile;

