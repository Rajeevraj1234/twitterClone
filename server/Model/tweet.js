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
    bookmark:{
      type:String,
      default:0,
    },
    view:{
      type:String,
      default:0,
    },
    retweet:{
      type:String,
      default:0,
    },
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
