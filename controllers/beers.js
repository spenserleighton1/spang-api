//import the Beer constant explicitly
const { Beer } = require('../models');
const trunks = require('trunks-log');
const log = new trunks('BEERS');

//show all beers
exports.index = async (req, res) => {
  //query the DB of all beers
  await Beer.find().exec()
    .then(beers => {
      log.success('Retrieved all {} beers', beers.length);
      res.json({ beers: beers});
    })
    .catch(err => {
      log.error(err, 'Could not retrieve beers: {}', err.message);
      res.json({ error: err, message: "Could not retrieve beers"}).status(500);
    });
};

//Store a new beer
exports.store = async (req, res) => {

};

//this function is for looking at one beer by their mongo id
exports.show = async (req, res) => {

};

//ever wanted to make the beers disappear 
exports.delete = async (req, res) => {

};

//edit a beer based on ID
exports.update = async (req, res) => {
  
};
