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
    title: 'test'
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
      records = {},
      columns = [],
      output = {};

    db.serialize(function () {
      db.run('CREATE TABLE city (id int(11) NOT NULL,cityName varchar(30) NOT NULL,people bigint null)');

      var stmt = db.prepare('INSERT INTO city VALUES (?,?,?)');

      stmt.run(1, 'Pune', 400000);
      stmt.run(2, 'Hillwood', 20000);
      stmt.run(3, 'San Jose', 40000);
      stmt.run(4, 'The City', 60000);
      stmt.run(5, 'South Park', 10000);
      stmt.run(6, 'Jacksonville', 50000);
      stmt.run(7, 'Atlanta', 900000);
      stmt.run(8, 'Savanna', 10000);
      stmt.run(9, 'Reno', 40000);

      stmt.finalize();

      db.run('CREATE TABLE emp (id int(11) NOT NULL,name varchar(50) NOT NULL,cityId int(11) NOT NULL,score int(11) NOT NULL)')
      stmt = db.prepare('INSERT INTO emp VALUES (?,?,?,?)');
      stmt.run(1, 'Lord Brain', 1, 5);
      stmt.run(2, 'Matthew', 2, 4);
      stmt.run(3, 'Ferrero Jeremy', 3, 6);
      stmt.run(4, 'Bud Light', 4, 4);
      stmt.run(5, 'Demi Moore', 5, 6);
      stmt.run(6, 'Woody Allen', 1, 2);
      stmt.run(7, 'Joaquin Phoenix', 2, 9);
      stmt.run(8, 'Meg Ryan', 3, 4);
      stmt.run(9, 'Trey Anastasio', 4, 3);
      stmt.run(10, 'Marie Osmond', 5, 6);
      stmt.finalize();


      function getRecords() {
        return new Promise((resolve, reject) => {
          console.log(fromRunpy.toString());
          db.all(fromRunpy.toString(), [], (err, rows) => {
            if (err) {
              return console.error(err.message);
            }
            var obj = {};
            rows.forEach((row) => {
              obj = row;
              data.push(row);
            });
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
              var ob = { data: keys[i], title: keys[i] };
              columns.push(ob);
            }
            output.data = data;
            output.columns = columns;
            resolve(output);
          })

          db.close();
        })
      }



      (async function () {
        records = await getRecords();
        console.log(records);
        res.contentType('json');
        res.send(records);

      })()

    });

  });
});



module.exports = router;