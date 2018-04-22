var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', function(req, res, next) {
  res.jsonp({
    code: 0,
    data: [{
      name: 'dz',
      age: 28 
    }, {
      name: 'oxx',
      age: 26
    }]
  })
})

module.exports = router;
