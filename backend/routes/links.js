const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Link = db.Link;
const Story = db.Story;

router.get("/", (req, res, next) => {
    let page = req.query.page || 0
    let limit = 50;
    Link.findAll({
        limit: 50, 
        offset: limit * page,
        limit: limit,
   }).then(data => res.send(data));
});

router.get("/:url", (req, res, next) => {
    Link.findOne({ where: {
        url: req.params.url
      }}).then(data => res.send(data))
});


//Throw error back up;
// Check request body -> bad req
// Create fails -> 500 
// Try catch -> pass error to next, and set error status to 500
router.post("/", (req, res, next) => {  
    if(!body){
        res.sendStatus(400);
        return;
    }
    try {
        Link.create(req.body).then(data => res.send(data));
    }
    catch(e){
        e.status = 500;
        next(e);
    }
 });



router.delete("/:url", (req, res, next) => {
    Link.destroy({ where: {
        url: req.params.url
      }}).then(data => res.sendStatus(204)).catch(err=>res.send(err));
});

router.get("/getStories/:url",(req,res,next) => {
    Story.findAll({ where: {
        "link url": req.params.url
      }}).then(stories => {
        res.send(stories);
      })
})

module.exports = router;
