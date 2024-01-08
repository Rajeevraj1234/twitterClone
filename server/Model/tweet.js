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
    likes: [{
      type: String,
    }],
    reply: {
      type: String,
      default:0,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Tweet = model("tweet", tweetSchema);

module.exports = Tweet;
