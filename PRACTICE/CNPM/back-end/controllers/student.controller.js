const mongoose = require("mongoose");
const Student = require('../models/student.model')


// module.exports.getIndex = (req, res) => {

//   res.render("visitor/index", {
//     listVisitor: listVisitor });
// };

module.exports.getIndex = (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      console.log(err);
    } else {
      res.render("student/index", {
        listStudent: students
      });
    }
  });
};

// app.post('/articles/add', (req, res) => {
//   let article = new Article();
//   article.title = req.body.title;
//   article.author = req.body.author;
//   article.body = req.body.body;
//   article.save((err) => {
//       if(err) {
//           console.log(err);
//       } else {
//           res.redirect('/')
//       }
//   })

// })

module.exports.getCreate = (req, res) => {
  res.render("student/create");
};

module.exports.postCreate = (req, res) => {
  // const newVisitor = {
  //   _objectID: Number(req.body._objectID),
  //   name: req.body.name,
  //   age: Number(req.body.age),
  // };
  // var newlistVisitor = [...listVisitor, newVisitor];
  // res.render("visitor/index", {
  // listVisitor: newlistVisitor,
  // });

  const newStudent = new Student()
  newStudent.name = req.body.name
  newStudent.age = Number(req.body.age)
  newStudent.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/student')  
    }
  })
};

module.exports.getUpdate = (req, res) => {
  res.render("student/update");
};

module.exports.getDelete = (req, res) => {
  res.render("student/delete");
};
