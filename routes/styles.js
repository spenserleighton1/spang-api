const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('style routes');
});

module.exports = router;