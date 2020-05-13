const mongoose = require("mongoose");
const Visitor = require("../models/visitor.model");


// module.exports.getIndex = (req, res) => {

//   res.render("visitor/index", {
//     listVisitor: listVisitor });
// };

module.exports.getIndex = (req, res) => {
  Visitor.find({}, (err, visitors) => {
    if (err) {
      console.log(err);
    } else {
      res.render("visitor/index", {
        listVisitor: visitors
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
  res.render("visitor/create");
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

  const newVisitor = new Visitor()
  newVisitor.name = req.body.name
  newVisitor.age = Number(req.body.age)
  newVisitor.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/visitor')  
    }
  })
};

module.exports.getUpdate = (req, res) => {
  res.render("visitor/update");
};

module.exports.getDelete = (req, res) => {
  res.render("visitor/delete");
};
