var express = require('express');
var router = express.Router();


/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CX Analytics'
  });
});


router.get('/NlSQl', function (req, res, next) {
  console.log('test');
  // console.log(req.body.objectData);
  res.contentType('json');
  res.send({ some: JSON.stringify({response:'json'}) });
});



router.get('/sankey', function (req, res, next) {
  res.render('sankey', {
    title: 'test'
  });

});


module.exports = router;