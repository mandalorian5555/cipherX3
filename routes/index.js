var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/dashboard');
});

router.get('/billing', function(req, res) {
  res.render('pages/billing');
});

router.get('/profile', function(req, res) {
  res.render('pages/profile');
});

router.get('/rtl', function(req, res) {
  res.render('pages/rtl');
});

router.get('/signin', function(req, res) {
  res.render('pages/signin');
});

router.get('/signup', function(req, res) {
  res.render('pages/signup');
});

router.get('/tables', function(req, res) {
  res.render('pages/tables');
});

router.get('/vr', function(req, res) {
  res.render('pages/virtualreality');
});


module.exports = router;
