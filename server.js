const path = require('path');
const express = require("express");
const db = require("./backend/db/database");

const app = express();

app.set("json spaces", 2);

db.sequelize.sync({}).then(() => console.log("Database connected"));

// links routes for backend api
app.use("/api/stories", require("./backend/routes/stories"));
app.use("/api/links", require("./backend/routes/links"));

// links routes for frontend React webpack build
app.use(express.static(path.join(__dirname, 'dist')));

console.log("ENV: " + proccess.env);

// sends the user to index html page for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

module.exports = app;
