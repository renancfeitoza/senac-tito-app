
const Sequelize = require("sequelize");

const sequelize = new Sequelize("senacApp", "root", "positivo20", {
    host: "localhost",
    dialect: "mysql"
});

// const sequelize = new Sequelize("senacApp", "senac", "9290", {
//     host: "localhost",
//     dialect: "mysql"
// });

sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado com sucesso!");
    })
    .catch((err) => {
        console.log("Falha ao se conectar: " + err);
    });

module.exports = sequelize;