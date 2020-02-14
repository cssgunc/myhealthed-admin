const Sequelize = require('sequelize');
const sequelize = new Sequelize('myhealthed', 'postgres', '052899', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize.authenticate().then(() => {
  console.log("Success!");
  var Stories = sequelize.define('stories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    perspective: {
      type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER,
    },
    lgbtq:{
        type: Sequelize.STRING
    },
    race:{
        type: Sequelize.STRING
    },
    phone:{
        type:Sequelize.STRING
    },
    topic:{
        type: Sequelize.STRING
    },
    title:{
        type: Sequelize.STRING
    },
    published:{
        type: Sequelize.DATE
    }



  },
  {
    freezeTableName: true
  });

  Posts.sync({force: true}).then(function () {
    return Posts.create({
      title: 'Getting Started with PostgreSQL and Sequelize',
      content: 'Hello there'
    });
  });
}).catch((err) => {
  console.log(err);
});