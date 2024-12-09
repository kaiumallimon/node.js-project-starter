const Course = require("../../../models/course.model");
const Person = require("../../../models/person.model");
const StudentCourseModel = require("../../../models/student.course.model");


exports.addPerson = async(req,res)=>{
    try{
        const {id,name,age,salary} = req.body;

        const newPerson = new Person({
            id: id,
            name: name,
            age:age,
            salary:salary
        });

        await newPerson.save()

        res.status(201).json({
            message: "Person added successfully",
            person: newPerson
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    } 
}

exports.addCourse = async(req,res)=>{
    try{
        const {id,name} = req.body;

        const newCourse = new Course({
            course_id: id,
            course_name: name,
        });

        await newCourse.save()

        res.status(201).json({
            message: "Course added successfully",
            person: newCourse
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    } 
}



exports.assignCourse = async(req,res)=>{
    try{
        const {student_id, course_id} = req.body;

        const newStudentCourse = new StudentCourseModel({
            student_id: student_id,
            course_id: course_id
        });

        await newStudentCourse.save();

        res.status(201).json({
            message: "Course assigned successfully",
            assignedCourse: newStudentCourse
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    } 
}


// get all students and their courses
exports.getStudentData = async (req, res) => {
    try {
      const studentCourses = await StudentCourseModel.find()
        .populate({
          path: 'student_id', // Alias for the relationship
          model: 'Person', // The model to populate
          localField: 'student_id', // The field in StudentCourseModel
          foreignField: 'id', // The custom field in the Person model
          select: 'name age id' // Specify fields to return
        })
        .populate({
          path: 'course_id', // Alias for the relationship
          model: 'Course', // The model to populate
          localField: 'course_id', // The field in StudentCourseModel
          foreignField: 'course_id', // The custom field in the Course model
          select: 'course_name course_id' // Specify fields to return
        });
  
      // Transform the data into the required format
      const studentDataMap = {};
  
      studentCourses.forEach((entry) => {
        if (!entry.student_id || !entry.course_id) return; // Skip incomplete data
  
        const student = entry.student_id;
        const course = entry.course_id;
  
        if (!studentDataMap[student.id]) {
          studentDataMap[student.id] = {
            name: student.name,
            age: student.age,
            courses: []
          };
        }
  
        studentDataMap[student.id].courses.push(course.course_name);
      });
  
      // Convert the map into an array
      const studentData = Object.values(studentDataMap);
  
      res.status(200).json(studentData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  