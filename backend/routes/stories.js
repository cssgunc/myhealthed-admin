const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Story = db.Story;

router.get("/", (req, res, next) => {
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

router.get("/:id", (req, res, next) => {
    Story.find({ where: {
        id: req.params.id
    }}).then(data => res.send(data))
});

router.get("/link", (req,res,next) => {
    if(!req.body){
        res.sendStatus(400);
        return;
    }
    Story.findAll({ 
        where: {
            "link url": req.body.url
        }
    }).then(stories => {
        res.send(stories);
    });
});

router.post("/", (req, res, next) => {
    if(!req.body){
        res.sendStatus(400);
        return;
    }
    try {
        Story.create(req.body).then(data => res.send(data));
    }
    catch(e) {
        e.status = 500;
        next(e);
    }
});

router.delete("/:id", (req, res, next) => {
    Story.destroy({ where: {
        id: req.params.id
    }}).then(data => res.sendStatus(204)).catch(err=>res.send(err));
});

module.exports = router;
