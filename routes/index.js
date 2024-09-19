var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/search');
});

router.get('/explore', function(req, res) {
  res.render('pages//explore');
});

router.get('/Analyze', function(req, res) {
  res.render('pages/Analyze');
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



router.get('/vr', function(req, res) {
  res.render('pages/download');
});


module.exports = router;
