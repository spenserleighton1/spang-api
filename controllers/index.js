//Here we will import all our controllers, this way we only need to
//import the controller as a single module, or an explicit constant later!!!
const usersController = require('./users')
const breweriesController = require('./breweries')
const beersController = require('./beers')
const flavorsController = require('./flavors')
const stylesController = require('./styles')
const locationsController = require('./locations')
const authController = require('./auth')

module.exports = { 
  usersController,
  breweriesController,
  beersController,
  flavorsController,
  stylesController,
  locationsController,
  authController
}