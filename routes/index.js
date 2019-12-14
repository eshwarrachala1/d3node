var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});

router.get('/sankey', function (req, res, next) {
  res.render('sankey', {
    title: 'test'
  });

});


module.exports = router;