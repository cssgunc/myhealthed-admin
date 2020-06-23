const storyData = require("../data/storyData.json");
const linkData = require("../data/linkData.json");

const db = require("../db/database");
const Story = db.Story;
const Link = db.Link;

db.sequelize.sync({});

async function loadData(){
    for(let i = 0; i < storyData.length; i++){
        let myObj = storyData[i];
        Object.keys(myObj).forEach(k => myObj[k] = myObj[k] === '' ? null : myObj[k])
        await Story.create(myObj);
    }
    process.exit(0);
}

async function loadLinkData(){
    for(let i = 0; i < linkData.length; i++){
        let myObj = linkData[i];
        Object.keys(myObj).forEach(k => myObj[k] = myObj[k] === '' ? null : myObj[k])
        await Link.create(myObj);
    }
    process.exit(0);
}
loadData();
loadLinkData()

