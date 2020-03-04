module.exports = function(sequelize, Sequelize) {
  let Link = sequelize.define(
    "links",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      siteName: {
        type: Sequelize.STRING
      },

      linkTitle: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      storyTags: {
        type: Sequelize.STRING
      },
      timesClicked: {
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
