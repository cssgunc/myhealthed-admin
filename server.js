const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./backend/config/database");

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

const PORT = process.env.PORT || 4100;

db.sequelize.sync({}).then(() => console.log("Database connected"));

// links routes for backend api
app.use("/api/stories", require("./backend/routes/stories"));
app.use("/api/links", require("./backend/routes/links"));

// links routes for frontend React webpack build
app.use(express.static(path.join(__dirname, 'dist')));

// sends the user to index html page for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
