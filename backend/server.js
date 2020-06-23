const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("json spaces", 2);

db.sequelize.sync({});

app.use("/api/stories", require("./routes/stories"));
app.use("/api/links",require("./routes/links"))

module.exports = app;