const mongoose = require("mongoose");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.getIndex = (req, res) => {
  res.render("user/index");
};

module.exports.getCreate = (req, res) => {
  res.render("user/create");
};

module.exports.postCreate = (req, res) => {
  const saltRounds = 15;
  const newUser = new User();

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      newUser.user = req.body.user;
      newUser.password = hash;
      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/user");
        }
      });
    }
  });
};

module.exports.getLogin = (req, res) => {
  res.send("<p>Waiting...</p>");
};
