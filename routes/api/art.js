const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/api/artCtrl');
const User = require('../../models/User')

router.get('/', artCtrl.get)

router.put('/:id', artCtrl.put)

router.post('/', artCtrl.create);

router.delete('/:id', artCtrl.destroy);

router.get('/:id', artCtrl.show);

//TEST CODE FOR LATER
//For Pulling all art from a user
async function fromUser(req, res) {
    const person = await User.findById(req.user._id).populate("artCollection")
      if (person) {
        //"Done" is up to backend and can change
        if(req.query.status === "done"){
          const filtered = person.artCollection.filter((art) => {
            return art.isDone === true 
          })
          res.status(200).json(filtered)
        } else if (req.query.status === "wip"){
          //"wip" is up to backend and can change
          const filtered = person.artCollection.filter((art) => {
            return art.isDone === false 
          })
          res.status(200).json(filtered)
        } else {
          res.status(200).json(person.artCollection)
        }
      } else {
        res.status(400).json(err)
      }
  }

module.exports = router;