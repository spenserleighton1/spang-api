const express = require('express');
const router = express.Router();
const { beersController } = require('../controllers/index');

router.get('/', beersController.index);

module.exports = router;