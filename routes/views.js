const express = require('express');

const router = new express.Router();

router.get('/',(req,res) => {
    res.render('index');
});

router.get('/index-flow-page',(req,res) => {
    res.render('index-flow-page');
});

module.exports = router;