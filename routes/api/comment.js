const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/commentCtrl');


router.delete('/:artid/delete/:id', commentCtrl.deleteComment);

router.post('/:id', commentCtrl.createComment);

module.exports = router;