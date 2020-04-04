const express = require("express");
const router = express.Router();
const db = require("../db/database");

const Link = db.Link;
const Story = db.Story;

router.get("/get", (req, res, next) => {
    let page = req.query.page || 0;
    let limit = 50;
    Link.findAll({
        limit: 50, 
        offset: limit * page,
        limit: limit,
    }).then(data => res.send(data));
});
router.get("/getAll", (req, res, next) => {
    Link.findAll().then(data => res.send(data))
});

router.get("/get/id/:id", (req, res, next) => {
    if(!req.params.id){
        res.sendStatus(400);
        return;
    }
    Link.findOne({ where: {
        id: req.params.id
    }}).then(data => res.send(data));
});

router.get("/get/url/:url", (req, res, next) => {
    if(!req.params.url){
        res.sendStatus(400);
        return;
    }
    Link.findOne({ where: {
        url: decodeURIComponent(req.params.url)
    }}).then(data => res.send(data));
});

//Throw error back up;
// Check request body -> bad req
// Create fails -> 500 
// Try catch -> pass error to next, and set error status to 500
router.post("/create", (req, res, next) => {  
    if(!req.body){
        res.sendStatus(400);
        return;
    }
    try {
        let newLink = {
            url: req.body.url,
            topic: req.body.topic,
            subtopic: req.body.subtopic,
            title: req.body.title,
            siteName: req.body.siteName,
            notes: req.body.notes
        }
        Link.create(newLink).then(data => res.send(data));
    }
    catch(e){
        e.status = 500;
        next(e);
    }
});

router.delete("/delete/:id", (req, res, next) => {
    if(!req.params.id){
        res.sendStatus(400);
        return;
    }
    Link.destroy({ where: {
        id: req.params.id
    }}).then(data => res.sendStatus(204)).catch(err=>res.send(err));
});

module.exports = router;
