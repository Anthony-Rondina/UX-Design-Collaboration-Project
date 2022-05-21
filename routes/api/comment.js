const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/commentCtrl');


router.post('/:id', commentCtrl.createComment);

module.exports = router;