const Sequelize = require("sequelize");
const Secrets = require("./secrets");
const sequelize =  new Sequelize(
  Secrets["database"]["db"],
  Secrets["database"]["user"],
  Secrets["database"]["password"],
  {
    host: "localhost",

    dialect: "postgres",
    logging: false,
    // operatorsAliases: false,

    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000
    }
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Story = require("../models/Story")(sequelize,Sequelize);
module.exports = db;
