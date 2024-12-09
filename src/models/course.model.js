const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_id: {
    type: Number,
    required: true,
    unique: true // Ensure uniqueness
  },
  course_name: {
    type: String,
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
