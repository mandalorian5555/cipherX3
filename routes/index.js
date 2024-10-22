var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  carddata= {
    card1:{title: 'Query by',text1:'Identifier',text2:'',icon:'ni-planet'},
    card2:{title: 'Query by',text1:'Coordinates',text2:'',icon:'ni-laptop'},
    card3:{title: 'Query by',text1:'External ID',text2:'',icon:'ni-planet'},
    card4:{title: 'Query by',text1:'User Cretiria',text2:'',icon:'ni-planet'}}
    
  res.render('pages/Shell',{carddata:carddata});
});

/*
router.get('/explore', function(req, res) {
  res.render('pages/explore');
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
*/


module.exports = router;
