const mongoose = require("mongoose");
const Visitor = require("../models/visitor.model");

module.exports.getIndex = (req, res) => {
  Visitor
    .find({})
    .then(visitors => {
      res.render("visitor/index", {
        listVisitor: visitors
      })
    })
    .catch(err => console.log(err))
};

module.exports.getCreate = (req, res) => {
  res.render("visitor/create");
};

module.exports.postCreate = (req, res) => {
  const newVisitor = new Visitor();
  newVisitor.name = req.body.name;
  newVisitor.age = Number(req.body.age);
 
  newVisitor
    .save()
    .then(() => res.redirect("/visitor"))
    .catch(err => console.log(err))
};

module.exports.getUpdate = (req, res) => {
  Visitor
    .findById(req.params.id)
    .then(visitor => {
      res.render("visitor/update", {
        visitor: visitor
      })
    })
    .catch(err => console.log(err))
};

module.exports.postUpdate = (req, res) => {
  const updatedVisitor = {};
  updatedVisitor.name = req.body.name;
  updatedVisitor.age = req.body.age;

  const query = { _id: req.params.id };

  Visitor
    .update(query, updatedVisitor)
    .then(() => res.redirect("/visitor"))
    .catch(err => console.log(err))
};

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id };

  Visitor
    .remove(queryDel)
    .then(() => res.redirect("/visitor"))
    .catch(err => console.log(err))
};

module.exports.getSearch = (req, res) => {
  const question = req.query.q;
  Visitor
    .find()
    .or([
      { name: question }, 
      { age: question }
      ])
    .then((matchedVisitor) => {
      res.render("visitor/index", {
        listVisitor: matchedVisitor,
      });
    })
    .catch((err) => console.log(err));
};
