const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  get,
  put,
  destroy,
  show,
  addUserFollowing
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
}

async function get(req, res) {

  try {
    const query = User.find({}).populate('artCollection')
    query.exec((err, foundUser) => {
      if(!err) {
        res.status(200).json(foundUser)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }
  // User.find({}, (err, foundUser) => {
  //   if (!err) {
  //     res.status(200).json(foundUser)
  //   } else {
  //     res.status(400).json(err)
  //   }
  // })

}

async function addUserFollowing (req, res) {
  try {
    const userId = req.user._id;
    const userFollowedId = req.params.id;

    const updatedUser = await User.updateOne( { _id: userId}, { $push: { following: userFollowedId }} );
    res.status(200).json({ msg: updatedUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
}

async function put(req, res) {
  const { body } = req

  User.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedUser) => {
    if (!err) {
      res.status(200).json(updatedUser)
    } else {
      res.status(400).json(err)
    }
  })
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json(createJWT(user));
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function show(req, res) {

  try {
    const query = User.findById(req.params.id).populate('artCollection')
    query.exec((err, foundUser) => {
      if(!err) {
        res.status(200).json(foundUser)
      } else {
        res.status(400).json({ message: error.message })
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }
}

async function destroy(req, res) {
  try {
    User.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({message: "User Deleted"})
      }
    })
  } catch (e) {
    res.status(400).json(e);
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}