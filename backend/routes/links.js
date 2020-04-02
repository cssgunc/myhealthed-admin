const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Link = db.Link;

router.get("/", (req, res, next) => {
    Link.findAll({
        limit: 2, 
        order: '"id" ASC'
    }).then(data => res.send(data));
});

router.get("/:id", (req, res, next) => {
    Link.findOne({ where: {
        id: req.params.id
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

router.get("/upClickCount/:id",(req,res,next) => {
    Link.findOne({ where: {
        id: req.params.id
      }}).then(link => {
          link.timesClicked = link.timesClicked + 1;
          link.save();
      }).then(res.send(201))
})

router.delete("/:id", (req, res, next) => {
    Link.destroy({ where: {
        id: req.params.id
      }}).then(data => res.sendStatus(204)).catch(err=>res.send(err));
});

// search url and return all stories that use it. 

module.exports = router;
