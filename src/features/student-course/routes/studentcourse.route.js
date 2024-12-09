const express = require('express');
const router = express.Router();
const studentCourseController = require('../controllers/studentcourse.controller'); 


router.get('/student',studentCourseController.getStudentData);
router.post('/add-person',studentCourseController.addPerson);
router.post('/add-course',studentCourseController.addCourse);
router.post('/assign-course',studentCourseController.assignCourse); 


module.exports = router;