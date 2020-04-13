const express = require("express");
const db = require("./db/database");

const app = express();

app.set("json spaces", 2);

db.sequelize.sync({}).then(() => console.log("Database connected"));

app.use("/api/stories", require("./routes/stories"));
app.use("/api/links",require("./routes/links"))

module.exports = app;