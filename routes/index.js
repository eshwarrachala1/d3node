var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var spawn = require("child_process").spawn;
  var pythonProcess = spawn('python', ["public/model.py", "-i Getme city where cityName like  wood"]);

  pythonProcess.stdout.on('data', function (data) {

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

      console.log(data.toString());

      db.each(data.toString(), function (err, row) {
        console.log(row.id + ': ' + row.cityName);
      });
    });

    db.close();
  });



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