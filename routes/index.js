var express = require('express');
var router = express.Router();
var spawn = require("child_process").spawn;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});

router.get('/sankey', function (req, res, next) {
  var options = {
    args: [
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims // number of simulations
    ]
  };

  var pythonProcess = spawn('python', ['/python/d_alembert.py', options]);

  pythonProcess.stdout.on('data', function (data) {
    if (err) res.send(err);
    res.send(data.toString());
  });
});


module.exports = router;