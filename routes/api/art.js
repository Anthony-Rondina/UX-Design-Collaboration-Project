const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/artCtrl');
const User = require('../../models/User');

router.get('/', artCtrl.get)

router.get('/:artType', artCtrl.getAllFilteredArt)

router.put('/:id', artCtrl.put)

router.post('/', artCtrl.create);

router.delete('/:id', artCtrl.destroy);

router.get('/wip', artCtrl.getAllUserWipArt);

router.get(`/chosenart/:id`, artCtrl.show);


//THIS IS THE SHOW ROUTE FOR ART AND NEEDS TO BE LAST!
// router.get('/:id', artCtrl.getAllUserArt);



module.exports = router;