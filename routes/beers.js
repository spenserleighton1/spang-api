const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('Beer routes');
});




router.post("/", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

module.exports = router;