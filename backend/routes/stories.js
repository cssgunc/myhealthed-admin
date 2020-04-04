const express = require("express");
const router = express.Router();
const db = require("../db/database");

const Story = db.Story;

router.get("/get", (req, res, next) => {
    let page = req.query.page || 0
    let limit = 50;
    Story.findAll({
        offset: limit * page,
        limit: limit,
        order: [['id', 'DESC']]
    }).then(data => res.send(data))
});

router.get("/getAll", (req, res, next) => {
    Story.findAll().then(data => res.send(data))
});

router.get("/get/id/:id", (req, res, next) => {
    Story.findOne({ where: {
        id: req.params.id
    }}).then(data => res.send(data))
});

router.get("/get/link", (req,res,next) => {
    let url = decodeURIComponent(req.query.url);
    Story.findAll({ 
        where: {
            "link url": url
        }
    }).then(stories => {
        res.send(stories);
    });
});

router.post("/create", (req, res, next) => {
    if(!req.body){
        res.sendStatus(400);
        return;
    }
    try {
        let newStory = {
            perspective: req.body.perspective,
            age: req.body.age,
            lgbtq: req.body.lgbtq,
            race: req.body.race,
            phone: req.body.phone,
            topic: req.body.topic,
            title: req.body.title,
            lede: req.body.lede,
            "story texts": req.body['story texts'],
            "link url": req.body['link url'],
            "link photo": req.body['link photo'],
            "link title": req.body['link title'],
            "link site name": req.body['link site name'],
            "link body": req.body['link body'],
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
        }
        Story.create(newStory).then(data => res.send(data));
    }
    catch(e) {
        e.status = 500;
        next(e);
    }
});

router.delete("/delete/:id", (req, res, next) => {
    Story.destroy({ where: {
        id: req.params.id
    }}).then(data => res.sendStatus(204)).catch(err=>res.send(err));
});

module.exports = router;
