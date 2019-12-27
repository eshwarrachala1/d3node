var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {


  let runPy = new Promise(function (success, nosuccess) {
    const {
      spawn
    } = require('child_process');
    const pyprog = spawn('python', ["public/model.py", "-i Getme city where cityName like  wood"]);

    pyprog.stdout.on('data', function (data) {
      success(data);
    });

    pyprog.stderr.on('data', (data) => {
      nosuccess(data);
    });
  });

  var test = new Array();

  runPy.then(function (fromRunpy) {
    console.log(fromRunpy.toString());
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database(':memory:');
   
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
       // console.log(row.id + ': ' + row.cityName);
       console.log(row);
        test.push(row.cityName);
      });
    });

    db.close();
  });

  console.log(test);

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