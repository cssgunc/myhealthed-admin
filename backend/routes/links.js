const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Link = db.Link;

router.get("/", (req, res, next) => {
    Link.findAll().then(data=> res.send(data));
});
router.get("/:id", (req, res, next) => {
    Link.findAll({ where: {
        id: req.params.id
      }}).then(data=>res.send(data))

});
router.post("/", (req, res, next) => {  
    Link.create(req.body).then(data=> res.send(data));
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
      }}).then(data=>res.sendStatus(204)).catch(err=>res.send(err));

});



module.exports = router;

