const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Story = db.Story;

router.get("/", (req, res, next) => {
    Story.findAll({
        offset: 1 * req.query.page,
        limit: 1,
        order: [['id', 'ASC']]
    }).then(data=>res.send(data))

});
router.get("/:id", (req, res, next) => {
    Story.findAll({ where: {
        id: req.params.id
      }}).then(data=>res.send(data))

});

router.post("/", (req, res, next) => {  
   Story.create(req.body).then(data=> res.send(data));
});

router.delete("/:id", (req, res, next) => {
    Story.destroy({ where: {
        id: req.params.id
      }}).then(data=>res.sendStatus(204)).catch(err=>res.send(err));

});


module.exports = router;
