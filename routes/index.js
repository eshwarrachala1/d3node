var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});

router.get('/sankey', function (req, res, next) {
  res.render('sankey', {
    title: 'CX Analytics'
  });
});

module.exports = router;