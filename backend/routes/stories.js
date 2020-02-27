const express = require("express");
const router = express.Router();
const db = require("../config/database");

const Story = db.Story;

router.get("/", (req, res, next) => {
    Story.findAll().then(data=>res.send(data))

});
router.get("/:id", (req, res, next) => {
    Story.findAll({ where: {
        id: req.params.id
      }}).then(data=>res.send(data))

});

let sampleStory = 
    {
        "id": 7,
        "perspective": "First\n",
        "age": 12,
        "lgbtq": "yes",
        "race": "white",
        "phone": "123-456-7890",
        "topic": "bullying",
        "title": "This is the Title",
        "published": "2017-08-09T14:00:00.000Z",
        "like": 2,
        "cringey": 3,
        "haha": 4,
        "me too": 5,
        "interesting": 6,
        "story texts": "ABC 123",
        "link url": "link.com\n",
        "link photo": "Link photo",
        "link title": "link title",
        "link site name": "Link website",
        "link body": "this is the link body ",
      }


router.post("/", (req, res, next) => {  
   Story.create(req.body).then(data=> res.send(data));
});

router.delete("/:id", (req, res, next) => {
    Story.destroy({ where: {
        id: req.params.id
      }}).then(data=>res.sendStatus(204)).catch(err=>res.send(err));

});


module.exports = router;
