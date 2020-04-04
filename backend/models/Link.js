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
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true        
      },
      topic: {
        type: Sequelize.ENUM({
          values: ['bullying', 'relationships',"puberty"]
        })
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
