var express = require('express');
var router = express.Router();
var countdown = require('../public/javascripts/countdown');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Merry Christmas', counter: countdown.counter() });
});

module.exports = router;
