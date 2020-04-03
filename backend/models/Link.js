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

  Link.prototype.upClickCount = function upClickCount() {
    console.log("old: " + this.timesClicked);
    console.log("new: " + ++this.timesClicked);
}
  
  return Link;
};
