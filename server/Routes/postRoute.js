const express = require("express");
const Tweet = require("../Model/tweet");
const User = require("../Model/user");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/tweetImage/"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

router.post("/tweet", upload.single("tweetImage"), async (req, res) => {
  const data = req.body;
  if (data.postInput) {  //checking if data is there or not
    let tweet;
    try {
      if (req.file) {
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
          image: `tweetImage/${req.file.filename}`,
        });
      } else {
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
        });
      }
      res.status(201);
    } catch (error) {
      console.error("Error creating tweet:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }

    await User.updateOne(
      //pushing data to user to know hopw much post which user did
      { _id: data.userId },
      {
        $push: {
          posts: tweet._id,
        },
      }
    );
  }else{
    res.status(404).json({msg:"Empty tweet"});
  }

});

router.get("/getTweet", async (req, res) => {
  const allTweets = await Tweet.find({})
    .populate("createdBy")
    .sort({ createdAt: -1 });
  res.json({ allTweets });
});

router.get("/userTweet/:userId", async (req, res) => {
  const userId = req.params.userId;
  const allTweet = await Tweet.find({ createdBy: userId })
    .populate("createdBy")
    .sort({ createdAt: -1 });
  res.json({ allTweet });
});

router.post("/like", async (req, res) => {
  const data = req.body;
  const tweet = await Tweet.findById(data.tweetID);
  const isUserExist = tweet.likes.includes(data.userID);
  if (isUserExist) {
    await Tweet.findByIdAndUpdate(data.tweetID, {
      $pull: {
        likes: data.userID,
      },
    });
    return res.json({ status: tweet.likes.length });
  } else {
    await Tweet.findByIdAndUpdate(data.tweetID, {
      $push: {
        likes: data.userID,
      },
    });
    res.json({ status: tweet.likes.length });
  }
});

module.exports = router;
