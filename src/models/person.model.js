const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true // Ensure uniqueness
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
