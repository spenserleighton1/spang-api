const mongoose = require('mongoose');

const definition = {
  name: {
    type: String
  }
};

const options = {
  timestamps: true
};

//make the schema as a new instance of a mongoose schema, using our definition and options
const beerSchema = new mongoose.Schema(definition, options);

//export that boye
module.exports = mongoose.model('Beer', beerSchema);