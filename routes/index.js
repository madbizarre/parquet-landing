var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next){
    res.render('index', {title: 'Express'});
});

router.get('/parket', function (req, res, next){
    res.render('parket', {title: 'Express'});
});
router.get('/parket2', function (req, res, next){
    res.render('parket2', {title: 'Express'});
});
router.get('/parket3', function (req, res, next){
    res.render('parket3', {title: 'Express'});
});

module.exports = router;
