const Sequelize = require("sequelize");
const Secrets = require("../config/secrets");
const sequelize =  new Sequelize(
  Secrets["database"]["url"],
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
