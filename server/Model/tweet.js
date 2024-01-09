const { Schema, model } = require("mongoose");

const tweetSchema = new Schema(
  {
    tweet: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    likes: [
      {
        type: String,
      },
    ],
    pointedTo:{
      type:String,
    },
    pointedBy:[{
      type:Schema.Types.ObjectId,
      ref:"tweet"
    }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Tweet = model("tweet", tweetSchema);

module.exports = Tweet;
