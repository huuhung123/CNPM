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
  Student.findById(req.params.id, (err, student) => {
    if (err) {
      console.log(err);
    } else {
      res.render("student/update", {
        student: student
      });
    }
  });
};

module.exports.postUpdate = (req, res) => {
  const updatedStudent = {};
  updatedStudent.name = req.body.name;
  updatedStudent.age = req.body.age;

  const query = { _id: req.params.id };

  Student.update(query, updatedStudent, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/student");
    }
  });
}

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id }
  Student.remove(queryDel, (err) => {
    if (err) {
      console.log(err)
    }
    else {
      res.redirect('/student')
    }
  })
}

module.exports.getSearch = (req, res) => {
  const question = req.query.q;
   Student.find().or([{name: question}, {age: question}])
   .then(matchedStudent => {
     res.render("student/index", {
       listStudent: matchedStudent
     })
  })
   .catch(err => console.log(err))
  //   var matchedDuty =  db.get('users').filter(function(user) {
  //       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  //   })
}
