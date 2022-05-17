const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/artCtrl');
const User = require('../../models/User');

router.get('/', artCtrl.get)

router.put('/:id', artCtrl.put)

router.post('/', artCtrl.create);

router.delete('/:id', artCtrl.destroy);

router.get(`/:id/:id`, artCtrl.show);

router.get('/:id', artCtrl.getAllUserArt);

router.get('/:id/wip', artCtrl.getAllUserWipArt);

router.get('/:id/:artType', artCtrl.getAllFilteredArt);

module.exports = router;