var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database(':memory:');


  db.serialize(function () {
    db.run('CREATE TABLE lorem (info TEXT)');

    var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

    for (var i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i);
    }

    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
      console.log(row.id + ': ' + row.info);
    });
  });

  db.close();

  res.render('index', {
    title: 'CX Analytics'
  });
});


router.get('/sankey', function (req, res, next) {

  var spawn = require("child_process").spawn;
  var pythonProcess = spawn('python', ["public/model.py", "-i Getme emp where name like Carson"]);

  pythonProcess.stdout.on('data', function (data) {

    // console.log(data.toString());
  });

  res.render('sankey', {
    title: 'test'
  });

});


module.exports = router;