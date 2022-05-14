const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  get,
  put
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
}

async function get(req, res) {
  User.find({}, (err, foundUser) => {
    if (!err) {
      res.status(200).json(foundUser)
    } else {
      res.status(400).json(err)
    }
  })
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


/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}