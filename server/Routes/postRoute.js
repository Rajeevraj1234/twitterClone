const express = require("express");
const Tweet = require("../Model/tweet");
const User = require("../Model/user");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/tweetContent/"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

router.post("/tweet", upload.single("tweetContent"), async (req, res) => {
  const data = req.body;
  console.log(data);
  if (data.postInput) {
    //checking if data is there or not
    let tweet;
    try {
      if (data.pointedTo && req.file) {
        console.log("logged 1");
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
          content: `tweetContent/${req.file.filename}`,
          pointedTo: data.pointedTo,
        });
      } else if (data.pointedTo) {
        console.log("logged 2");
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
          pointedTo: data.pointedTo,
        });
      } else if (req.file) {
        console.log("logged 3");
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
          content: `tweetContent/${req.file.filename}`,
        });
      } else {
        console.log("logged 4");
        tweet = await Tweet.create({
          tweet: data.postInput,
          createdBy: data.userId,
        });
      }
      res.status(201);

      try {
        if (data.pointedTo) {
          await Tweet.updateOne(
            { _id: data.pointedTo },
            {
              $push: {
                pointedBy: tweet._id,
              },
            }
          );
        }
      } catch (error) {
        console.error("Error updating document:", error);
      }

      await User.updateOne(
        //pushing data to user to know how much post which user did
        { _id: data.userId },
        {
          $push: {
            posts: tweet._id,
          },
        }
      );
    } catch (error) {
      console.error("Error creating tweet:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ msg: "Empty tweet" });
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

router.post("/delete", async (req, res) => {
  const data = req.body;
  await Tweet.findOneAndDelete({ _id: data.tweetID });
  await User.updateOne(
    { _id: data.userID._id },
    { $pull: { posts: data.tweetID } }
  );
  res.status(200).json({ msg: "Tweet Deleted Sucessfully" });
});

router.get("/reply/:id", async (req, res) => {
  const id = req.params.id;
  const tweetData = await Tweet.findById(id).populate(
    "createdBy",
    "-password -salt"
  );
  res.json(tweetData);
});

module.exports = router;