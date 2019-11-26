
const Sequelize = require("sequelize");

const sequelize = new Sequelize("newProject", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Conectado com sucesso!");
//   })
//   .catch(() => {
//     console.log("Falha ao se conectar: " + error);
//   });

module.exports = sequelize;