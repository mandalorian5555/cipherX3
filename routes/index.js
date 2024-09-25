var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  carddata= {
    card1:{title: 'title1',text1:'text1',text2:'text2'},
    card2:{title: 'title2',text1:'text1',text2:'text2'},
    card3:{title: 'title3',text1:'text1',text2:'text2'},
    card4:{title: 'title4',text1:'text1',text2:'text2'}}
    
  res.render('pages/search',{carddata:carddata});
});

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


module.exports = router;
