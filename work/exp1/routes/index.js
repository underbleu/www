var express = require('express');
var router = express.Router();

/* GET home page. */
// http://localhost:5000/
router.get('/', function(req, res, next) {
  var obj = { title: 'node js' };
  res.render('index', obj);
});

// http://localhost:5000/abc
router.get('/abc', (req, res, next) => {
  res.send("여기는 /abc 입니다!");

});

module.exports = router;