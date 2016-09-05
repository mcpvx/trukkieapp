var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Truck = require('../models/truckSchema');

/* POST to create-truck */
router.post('/', function(req, res, next) {
  if(req.body.password === req.body.verifyPassword) {
    var truck = new Truck({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
    });
    user.save(function(err, doc){
      if(err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
    // send truck to account page
  } else {

  }
});

module.exports = router;
