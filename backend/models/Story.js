module.exports = function(sequelize, Sequelize) {
  return sequelize.define(
    "stories",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      perspective: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      lgbtq: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      lede: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.DATE
      },
      like: {
        type: Sequelize.INTEGER
      },
      cringey: {
        type: Sequelize.INTEGER
      },
      haha: {
        type: Sequelize.INTEGER
      },
      "me too": {
        type: Sequelize.INTEGER
      },
      interesting: {
        type: Sequelize.INTEGER
      },
      "story texts": {
        type: Sequelize.STRING(5000)
      },
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
