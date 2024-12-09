const mongoose = require('mongoose');

const studentCourseSchema = new mongoose.Schema({
  student_id: {
    type: Number, // Reference the custom `id` field in Person
    required: true,
    ref: "Person"
  },
  course_id: {
    type: Number, // Reference the custom `course_id` field in Course
    required: true,
    ref: "Course"
  }
});

const StudentCourseModel = mongoose.model('StudentCourse', studentCourseSchema);
module.exports = StudentCourseModel;
