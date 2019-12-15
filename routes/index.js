var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});

router.get('/sankey', function (req, res, next) {

  var spawn = require('child_process').spawn,
    py = spawn('python', ['/public/python/test.py']),
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dataString = '';
    
  py.stdout.on('data', function (data) {
    dataString += data.toString();
  });

  py.stdout.on('end', function () {
    console.log('Sum of numbers=', dataString);
  });

  py.stdin.write(JSON.stringify(data));

  py.stdin.end();

  res.render('sankey', {
    title: JSON.stringify(data)
  });

});


module.exports = router;