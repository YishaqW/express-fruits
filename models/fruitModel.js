const mongoose = require('mongoose')

// Create a new Schema
const fruitSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true  
  },
  color: { 
    type: String, 
    required: true 
  },
  readyToEat: Boolean
})

// create a new model with a Schema
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit