var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next){
    res.render('index');
});

router.get('/parquet', function (req, res, next){
    res.render('parquet');
});
router.get('/parquet-white', function (req, res, next){
    res.render('parquet-white');
});
router.get('/parquet-gray', function (req, res, next){
    res.render('parquet-gray');
});
router.get('/parquet-orange', function (req, res, next){
    res.render('parquet-orange');
});
router.get('/parquet-burlywood', function (req, res, next){
    res.render('parquet-burlywood');
});

module.exports = router;
