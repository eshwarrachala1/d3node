var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});


router.get('/NlSQl', function (req, res, next) {

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database(':memory:');

  console.log(req.query.message);

  let runPy = new Promise(function (success, nosuccess) {
    const {
      spawn
    } = require('child_process');
    const pyprog = spawn('python', ["public/model.py", "-i " + req.query.message]);

    pyprog.stdout.on('data', function (data) {
      success(data);
    });

    pyprog.stderr.on('data', (data) => {
      nosuccess(data);
    });
  });

  var data = [];

  runPy.then(function (fromRunpy) {

    db.serialize(function () {
      db.run('CREATE TABLE city (id int(11) NOT NULL,cityName varchar(30) NOT NULL)');

      var stmt = db.prepare('INSERT INTO city VALUES (?,?)');

      stmt.run(1, 'Pune');
      stmt.run(2, 'Hillwood');
      stmt.run(3, 'San Jose');
      stmt.run(4, 'The City');
      stmt.run(5, 'South Park');

      stmt.finalize();

      db.each(fromRunpy.toString(), function (err, row) {
        console.log(row);
        data.push({
          "id": row.id,
          "cityName": row.cityName
        });
      });

      console.log(data);
    });
    db.close();
  });

  res.contentType('json');
  res.send(data);
});

router.get('/sankey', function (req, res, next) {
  res.render('sankey', {
    title: 'test'
  });

});


module.exports = router;