const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Story = db.Story;

router.get("/", (req, res, next) => {
    Story.findAll().then(data=>res.send(data))
});

router.post("/", (req, res, next) => {  
   
});

module.exports = router;
