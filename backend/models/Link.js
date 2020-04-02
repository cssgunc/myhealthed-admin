module.exports = function(sequelize, Sequelize) {
  let Link = sequelize.define(
    "links",
    {
      url: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      topic: {
        type: Sequelize.STRING
      },

      title: {
        type: Sequelize.STRING
      },
      siteName: {
        type: Sequelize.STRING
      },
      timesUsed: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.INTEGER
      }
      
    },
    {
      freezeTableName: true
    }
  );

  Link.prototype.upClickCount = function upClickCount() {
    console.log("old: " + this.timesClicked);
    console.log("new: " + ++this.timesClicked);
}
  
  return Link;
};
