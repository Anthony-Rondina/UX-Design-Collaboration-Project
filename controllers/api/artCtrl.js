const Art = require('../../models/Art');

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
    const { body } = req
    const createdArt = await Art.create(body)
    res.status(200).json({ message: "Art Created!", createdArt })
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