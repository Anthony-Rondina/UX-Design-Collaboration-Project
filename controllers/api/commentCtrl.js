const Comment = require('../../models/Comment');
const Art = require('../../models/Art');
const User = require('../../models/User');

module.exports = {
  createComment,
  deleteComment
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

async function deleteComment(req,res) {

    try {
        Art.findByIdAndUpdate(req.params.artid, {$pull: {comments: req.params.id}}, {returnDocument: 'after'}, (err, updatedArt) => {
            if(err){
                res.status(400).json(err);
            } else {
                console.log("updated art is",updatedArt)
                updatedArt            }
        })
        Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Comment Deleted!" })

    } catch (e) {
        res.status(400).json(e);
    }

}