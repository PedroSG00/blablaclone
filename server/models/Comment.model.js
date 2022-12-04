const { Schema, model, Types } = require("mongoose");

const commentSchema = new Schema(

    {
        author: {
            type: String,
        },

        text: {
            type: String,
            required: [true, "You can't put a comment without text"]
        }
    },

    {
        timestamps: true,
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;



