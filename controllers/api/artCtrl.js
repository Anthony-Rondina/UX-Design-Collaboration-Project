const Art = require('../../models/Art');
const User = require('../../models/User');
module.exports = {
  create,
  get,
  put,
  show,
  destroy,
  getAllUserArt,
  getAllUserWipArt,
  getAllFilteredArt
};

async function get(req, res) {

  try {
    const query = Art.find({}).populate('user')
    query.exec((err, foundArt) => {
      if(!err) {
        res.status(200).json(foundArt)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }




  // Art.find({}, (err, foundArt) => {
  //   if (!err) {
  //     res.status(200).json(foundArt)
  //   } else {
  //     res.status(400).json(err)
  //   }
  // })

}

async function getAllFilteredArt(req,res) {

  Art.find({ type: {$eq: req.params.artType.toUpperCase() } }, (err, foundArt) => {
    if (!err) {
      res.status(200).json(foundArt)
    } else {
      res.status(400).json(err)
    }
  })

}

async function getAllUserArt(req,res) {

  try {
    const query = Art.find({ user: req.params.id }).populate('user')
    query.exec((err, foundArt) => {
      if(!err) {
        res.status(200).json(foundArt)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }

}

async function getAllUserWipArt(req,res) {

  try {
    const query = Art.find({ user: req.user.id, isDone: false })
     query.exec((err, foundArt) => {
       if(!err) {
         res.status(200).json(foundArt)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }

  // Art.find({ user: req.params.id, isDone: false}, (err, foundArt) => {
  //   if (!err) {
  //     res.status(200).json(foundArt)
  //   } else {
  //     res.status(400).json(err)
  //   }
  // })
}

async function put(req, res) {
  const { body } = req

  Art.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedArt) => {
    if (!err) {
      res.status(200).json(updatedArt)
    } else {
      res.status(400).json(err)
    }
  })
}

async function create(req, res) {
  try {
    //get the body from Request
    const { body } = req
    //Find the post from the ID in params
    const user = await User.findById(req.user._id)
    //Make the art from the form's body
    const art = new Art(body)
    //push art to the User's Collection
    user.artCollection.push(art._id)
    art.user=req.user._id 
    //save art to DB
    art.save()
    //save User to DB
    user.save()
    res.status(200).json({ message: "Worked!" })
  } catch (e) {
    res.status(400).json(e);
  }
}

async function show(req, res) {

  try {
    const query = Art.findById(req.params.id).populate('user')
    query.exec((err, foundArt) => {
      if(!err) {
        res.status(200).json(foundArt)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }

}

async function destroy(req, res) {

  const user = await User.findById(req.user._id)
  try {
    Art.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        res.status(400).json(err)
      } else {

        user.artCollection.pull(req.params.id);
        user.save();
        res.status(200).json({message: "Deleted Art"});

      }
    })
  } catch (e) {
    res.status(400).json(e);
  }
}

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