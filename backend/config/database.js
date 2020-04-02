const Sequelize = require("sequelize");
const Secrets = require("./secrets");
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

//Models 
db.Story = require("../models/Story")(sequelize,Sequelize);
db.Link = require("../models/Link")(sequelize,Sequelize);

module.exports = db;
