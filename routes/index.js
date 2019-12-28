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


  runPy.then(function (fromRunpy) {
    var data = [],
      records = [];

    db.serialize(function () {
      db.run('CREATE TABLE city (id int(11) NOT NULL,cityName varchar(30) NOT NULL,people bigint null)');

      var stmt = db.prepare('INSERT INTO city VALUES (?,?,?)');

      stmt.run(1, 'Pune',400000);
      stmt.run(2, 'Hillwood',20000);
      stmt.run(3, 'San Jose',40000);
      stmt.run(4, 'The City',60000);
      stmt.run(5, 'South Park',10000);
      stmt.run(6, 'Jacksonville',50000);
      stmt.run(7, 'Atlanta',900000);
      stmt.run(8, 'Savanna',10000);
      stmt.run(9, 'Reno',40000);

      stmt.finalize();

      function getRecords() {
        return new Promise((resolve, reject) => {
          db.all(fromRunpy.toString(), [], (err, rows) => {
            if (err) {
              return console.error(err.message);
            }
            rows.forEach((row) => {
              data.push(row);
            });
            resolve(data);
          })

        })
      }

      (async function () {
        records = await getRecords();
        res.contentType('json');
        res.send(records);

      })()

    });

  });
});

router.get('/sankey', function (req, res, next) {
  res.render('sankey', {
    title: 'test'
  });

});


module.exports = router;