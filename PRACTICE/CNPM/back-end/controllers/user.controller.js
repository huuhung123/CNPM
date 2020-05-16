const mongoose = require("mongoose");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.getIndex = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.render("user/index", {
        listUser: users,
      });
    }
  });
  //res.render("user/index");
};

module.exports.getCreate = (req, res) => {
  res.render("user/create");
};

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id };
  User.remove(queryDel, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/user");
    }
  });
};

module.exports.postCreate = (req, res) => {
  const saltRounds = 15;
  const newUser = new User();

  User.find({ user: req.body.user }, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      if (users.length > 0) {
        res.render("user/create", {
          errorUser: true,
        });
      } else {
        if (req.body.password !== req.body.confirm) {
          res.render("user/create", {
            errPassword: true,
          });
        } else {
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
        }
      }
    }
  });

  // User.find({}, (err, users) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.render("user/index", {
  //       listUser: users
  //     });
  //   }
  // });
};

module.exports.getLogin = (req, res) => {
  res.render("user/login");
};

module.exports.postLogin = (req, res) => {
  console.log(req.body);
  User.find({ user: req.body.user }, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      if (users.length == 0) {
        res.render("user/login", {
          errUser: true,
        });
      } else {
        const hashPassword = users[0].password;
        bcrypt.compare(req.body.password, hashPassword, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            if (result == true) {
              res.render("index", {
                errPassword: false,
              });
            } else {
              res.render("user/login", {
                errPassword: true,
              });
            }
          }
        });
      }
    }
  });
};
