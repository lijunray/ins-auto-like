var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('authorized', { text: 'Thanks for authorization' });
});

module.exports = router;
