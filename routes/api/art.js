const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/artCtrl');


router.get('/', artCtrl.get)

router.put('/:id', artCtrl.put)

router.post('/', artCtrl.create);

router.delete('/:id', artCtrl.destroy);

router.get('/:id', artCtrl.show);

module.exports = router;