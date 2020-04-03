module.exports = function(sequelize, Sequelize) {
  let Link = sequelize.define(
    "links",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true        
      },
      topic: {
        type: Sequelize.STRING
      },
      subtopic: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      siteName: {
        type: Sequelize.STRING
      },
      timesUsed: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      }
      
    },
    {
      freezeTableName: true
    }
  );

  
  return Link;
};
