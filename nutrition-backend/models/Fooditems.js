//Require Mongoose
var mongoose = require('mongoose');
const searchable = require('mongoose-regex-search');

//Define a schema
var Schema = mongoose.Schema;

var Fooditemschema = new Schema({
  Name: {type:String,lowercase:true},
  Calories: Number,
  Fat:Number,
  Protein:Number,
  Carbs:Number,
  Fiber:Number
});

Fooditemschema.plugin(searchable);

var Fooditem = mongoose.model('Fooditem', Fooditemschema );
module.exports = Fooditem