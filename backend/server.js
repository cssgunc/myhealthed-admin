const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const db = require("./config/database");

const app = express();

app.use(cors())
app.options('*', cors());

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


const API_PORT = process.env.API_PORT || 3001;



db.sequelize.sync({}).then(() => console.log("Database connected"));


app.use("/stories", require("./routes/stories"));


app.listen(API_PORT, () => console.log(`API listening on port ${API_PORT}`));
