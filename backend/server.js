const Sequelize = require('sequelize');
var StoryModel = require("./models/Story");

const sequelize = new Sequelize('myhealthed', 'postgres', '052899', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});
const Story = StoryModel(sequelize,Sequelize)

sequelize.authenticate().then(() => {
  console.log("Success!");
  sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

}).catch((err) => {
  console.log(err);
});