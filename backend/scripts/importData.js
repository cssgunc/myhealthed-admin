const data = require("../data/data.json");
const db = require("../config/database");
const Story = db.Story;

db.sequelize.sync({}).then(() => console.log("Database connected"));

async function loadData(){
    for(let i = 0; i < data.length; i++){
        let myObj = data[i];
        Object.keys(myObj).forEach(k => myObj[k] = myObj[k] === '' ? null : myObj[k])
        await Story.create(myObj);
    }
}

loadData();

