const Comment = require('../../models/Comment');
const Art = require('../../models/Art');
const User = require('../../models/User');

module.exports = {
  createComment
};

async function createComment(req,res) {

    try {

        const { body } = req
        const user = await User.findById(req.user._id)
        const art = await Art.findById(req.params.id)
        const comment = new Comment(body)
        art.comments.push(comment._id)
        comment.user = user
        comment.save()
        art.save()
        res.status(200).json({ message: "Worked!" })

    } catch (e) {
        res.status(400).json(e);
    }

}