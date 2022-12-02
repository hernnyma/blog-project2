var express = require('express');
var router = express.Router();
var repliesCtrl = require('../controllers/replies');


router.post('/posts/:id/reply', repliesCtrl.new)

module.exports = router;