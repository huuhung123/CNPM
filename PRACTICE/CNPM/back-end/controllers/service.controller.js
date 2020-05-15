const mongoose = require("mongoose");
const Service = require("../models/service.model");

module.exports.getIndex = (req, res) => {
  Service.find({}, (err, services) => {
    if (err) {
      console.log(err);
    } else {
      res.render("service/index", {
        listService: services,
      });
    }
  });
};

module.exports.getCreate = (req, res) => {
  res.render("service/create");
};

module.exports.postCreate = (req, res) => {
  const newService = new Service();
  newService.name = req.body.name;
  newService.service = req.body.service;
  newService.phone = req.body.phone;
  newService.place = req.body.place;

  newService.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/service");
    }
  });
};

module.exports.getDelete = (req, res) => {
  res.render("service/delete");
};

module.exports.getUpdate = (req, res) => {
  Service.findById(req.params.id, (err, service) => {
    if (err) {
      console.log(err);
    } else {
      res.render("service/update", {
        service: service,
      });
    }
  });
};

module.exports.postUpdate = (req, res) => {
  const updatedService = {};
  updatedService.name = req.body.name;
  updatedService.service = req.body.service;
  updatedService.phone = req.body.phone;
  updatedService.place = req.body.place;

  const query = { _id: req.params.id };

  Service.update(query, updatedService, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/service");
    }
  });
};

module.exports.getDelete = (req, res) => {
  const queryDel = { _id: req.params.id };
  Service.remove(queryDel, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/service");
    }
  });
};

module.exports.getSearch = (req, res) => {
  const question = req.query.q;
   Service.find().or([{name: question}, {service: question}, {phone: question}, {place: question}])
   .then(matchedService => {
     res.render("service/index", {
       listService: matchedService
     })
   })
   .catch(err => console.log(err))
  //   var matchedDuty =  db.get('users').filter(function(user) {
  //       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  //   })
}
