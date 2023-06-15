const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "mysql@cipher", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
