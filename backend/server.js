const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./db/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser()); // required before session.
app.set("json spaces", 2);

app.use(
  session({
    secret: "sfsalfnsaflknsadlknsandlsanfsanfnsaldnsadnlsalndsaldlnsadlnsandl",
    resave: true,
    saveUninitialized: true
  })
);

db.sequelize.sync({}).then(() => console.log("Database connected"));

app.use("/api/stories", require("./routes/stories"));
app.use("/api/links",require("./routes/links"))

module.exports = app;