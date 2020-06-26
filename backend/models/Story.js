const { STRING } = require("sequelize");

module.exports = function(sequelize, Sequelize) {
  return sequelize.define(
    "stories",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      // demographics
      age: {
        type: Sequelize.INTEGER
      },
      lgbtq: {
        type: Sequelize.STRING
      },
      perspective: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      // story info
      lede: {
        type: Sequelize.STRING
      },
      "story texts": {
        type: Sequelize.STRING(5000)
      },
      title: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.ENUM({
          values: ['bullying', 'relationships',"puberty"]
        })
      },
      // links
      "link url": {
        type: Sequelize.STRING
      },
      "link photo": {
        type: Sequelize.STRING
      },
      "link title": {
        type: Sequelize.STRING
      },
      "link site name": {
        type: Sequelize.STRING
      },
      "link body": {
        type: Sequelize.STRING
      },
      // story status
      status: {
        type: Sequelize.ENUM({
          values: ["accepted", "not accepted", "under review"]
        }),
        default: "under review"
      },
      published_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      sent_published_notification_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      accepted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      sent_accepted_notification_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      rejected_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      reason_for_rejection: {
        type: Sequelize.STRING
      },
      // reactions
      cringey: {
        type: Sequelize.INTEGER
      },
      haha: {
        type: Sequelize.INTEGER
      },
      like: {
        type: Sequelize.INTEGER
      },
      interesting: {
        type: Sequelize.INTEGER
      },
      "me too": {
        type: Sequelize.INTEGER
      },
      // timestamps
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      freezeTableName: true
    }
  );
};
