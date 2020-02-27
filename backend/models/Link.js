module.exports = function(sequelize,Sequelize) {
    return sequelize.define(
      "links",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
      "siteName":{
          type: Sequelize.STRING
      },
    
      "linkTitle":{
          type: Sequelize.STRING
      },
      "url":{
          type: Sequelize.STRING
      },
      "storyTags":{
          type: Sequelize.STRING
      },
  
  },
      {
        freezeTableName: true
      }
    );
  };
  