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
  res.render("user/login");
};

module.exports.postLogin = (req, res) => {
  User.find({ user: req.body.user }, (err, user) => {
    if (err) {
      res.sendStatus(400);
    } else {
      const hashPassword = user[0].password;
      bcrypt.compare(res.body.password, hashPassword, (err, result) => {
        if (result == true) {
          console.log("Login successfully");
        } else {
          console.log("Login failed");
        }
      });
    }
  });
};
