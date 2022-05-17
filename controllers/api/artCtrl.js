const Art = require('../../models/Art');
const User = require('../../models/User');
module.exports = {
  create,
  get,
  put,
  show,
  destroy
};

async function get(req, res) {
  Art.find({}, (err, foundArt) => {
    if (!err) {
      res.status(200).json(foundArt)
    } else {
      res.status(400).json(err)
    }
  })
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
    //save art to DB
    art.save()
    console.log("art saved to DB")
    //assigning the user to the art
    art.user = req.user._id
    //push art to the User's Collection
    user.artCollection.push(art._id)
    //save User to DB
    user.save()
    res.status(200).json({ message: "Worked!" })
  } catch (e) {
    res.status(400).json(e);
  }
}

async function show(req, res) {

  try {
    Art.findById(req.params,id, (err, foundArt) => {
      if(err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(foundArt)
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }

}

async function destroy(req, res) {

  try {
    Art.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({message: "Deleted Art"})
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