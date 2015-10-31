"use strict";
var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: 'ciklevka-parketa-spb@yandex.ru',
        pass: 'U4E31#RHw9'
    }
});

router.get('/', function (req, res, next){
    res.render('index');
});

router.post('/mail', function (req, res, next){
    let name = req.body.name,
        email = req.body.email,
        tel = req.body.tel,
        comment = req.body.comment,
        text;
    text = `Имя: ${name}
        Email: ${email || 'не указан'}
            Телефон: ${tel}
                Комментарий: ${comment}`;
    transporter.sendMail({
        from: 'Циклевка Паркета СПб <ciklevka-parketa-spb@yandex.ru>',
        to: 'ciklevka-parketa-spb@yandex.ru',
        subject: `Заявка с сайта: циклевка-паркета.рф`,
        text: text
    }, function (err){
        if (err) return next(err);
        res.end();
    });
});

module.exports = router;