var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ins-auto-like' });
});

router.get('/authorized', function(req, res, next) {
  res.render('authorized', { text: 'Thanks for authorization' });
});

module.exports = router;
