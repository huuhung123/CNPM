const mongoose = require("mongoose");
const Duty = require("../models/duty.model");

module.exports.getIndex = (req, res) => {
  Duty.find({}, (err, duties) => {
    if (err) {
      console.log(err);
    } else {
      res.render("duty/index", {
        listDuty: duties,
      });
    }
  });
};

module.exports.getCreate = (req, res) => {
  res.render("duty/create");
};

module.exports.postCreate = (req, res) => {
  const newDuty = new Duty();
  newDuty.name = req.body.name;
  newDuty.time = req.body.time;
  newDuty.place = req.body.place;
  newDuty.phone = req.body.phone;

  newDuty.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/duty");
    }
  });
};

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id };
  Duty.remove(queryDel, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/duty");
    }
  });
};

module.exports.getSearch = (req, res) => {
   const question = req.query.q;
   Duty.find().or([{name: question}, {time: question}, {phone: question}, {place: question}])
   .then(matchedDuty => {
     res.render("duty/index", {
       listDuty: matchedDuty
     })
   })
   .catch(err => console.log(err))
  //   var matchedDuty =  db.get('users').filter(function(user) {
  //       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  //   })
};

module.exports.getUpdate = (req, res) => {
  Duty.findById(req.params.id, (err, duty) => {
    if (err) {
      console.log(err);
    } else {
      res.render("duty/update", {
        duty: duty,
      });
    }
  });
};

module.exports.postUpdate = (req, res) => {
  const updatedDuty = {};
  updatedDuty.name = req.body.name;
  updatedDuty.time = req.body.time;
  updatedDuty.phone = req.body.phone;
  updatedDuty.place = req.body.place;

  const query = { _id: req.params.id };

  Duty.update(query, updatedDuty, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/duty");
    }
  });
};
