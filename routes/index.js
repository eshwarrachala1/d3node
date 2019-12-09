var express = require('express');

var d3 = require('d3');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'CX Analytics' });

});


router.get('helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' },d3.helloworld);
});

router.get('/d3',function(req,res){
  res.render('/d3',d3.helloworld);
});


module.exports = router;
