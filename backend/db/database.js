require('dotenv').config()
const Sequelize = require("sequelize");
const sequelize =  new Sequelize(
  process.env.DATABASE_URL,
  {
    logging: false,
    // operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define Models 
db.Story = require("../models/Story")(sequelize,Sequelize);
db.Link = require("../models/Link")(sequelize,Sequelize);

module.exports = db;
