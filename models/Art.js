const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema(
    {
        type: { type: String, required: true, enum: [WATERCOLOR, CANVAS, QUILLING, ACRYLIC, PAPERART] },
        nameOfArt: { type: String, required: true },
        views: Number,
        artPrompt: { type: String, required: true },
        isDone: Boolean,
        supplies: { type: String, required: true },
        gallery: Array,
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
        image: { type: String, required: true },
        cloudinaryImage: { type: String, required: false }

    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model('Art', artSchema);