const express = require('express');

const beerRoutes = require('./beers');
const styleRoutes = require('./styles');
const flavorRoutes = require('./flavors');

const router = express.Router();

router.use('/beers', beerRoutes);
router.use('/styles', styleRoutes);
router.use('/flavors', flavorRoutes);

module.exports = router;