var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');


router.get('/', postsCtrl.index)
router.get('/:id', postsCtrl.show)
router.put('/:id', postsCtrl.update)
router.post('/', postsCtrl.create)
router.delete('/:id', postsCtrl.delete)

module.exports = router;