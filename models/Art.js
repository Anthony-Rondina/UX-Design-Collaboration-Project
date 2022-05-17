const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema(
    {
        type: { type: String, required: false, enum: ["WATERCOLOR", "CANVAS", "QUILLING", "ACRYLIC", "PAPERART"] },
        nameOfArt: { type: String, required: false },
        views: Number,
        artPrompt: { type: String, required: false },
        isDone: Boolean,
        supplies: { type: String, required: false },
        gallery: Array,
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
        image: { type: String, required: false },
        cloudinaryImage: { type: String, required: false },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model('Art', artSchema);