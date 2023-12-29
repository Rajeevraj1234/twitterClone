const express = require("express");
const app = express();
const User = require("../Model/user");
const router = express.Router();
const { validateToken } = require("../Services/authentication");
const { checkForAunthicationCookie } = require("../middlewares/authentication");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/profileAndCoverImages/"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;

    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

router.post("/signup", async (req, res) => {
  const user = req.body;
  await User.create({
    fullname: user.fullname,
    email: user.email,
    username: user.username,
    password: user.password,
    about: user.about,
    dob: user.dob,
  });

  return res.redirect("http://localhost:3000");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res
      .cookie("token", token, { sameSite: "None", secure: true })
      .redirect("http://localhost:3000");
  } catch (error) {
    return res.redirect("http://localhost:3000");
  }
});

router.get("/userDetail", async (req, res) => {
  const tokenCookieValue = req.cookies.token;
  if (!tokenCookieValue) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token
    const userPayload = validateToken(tokenCookieValue);
    req.user = userPayload;
    const userProfile = await User.findById(userPayload._id);
    profileImage = userProfile.profileImage;

    res.json({ message: "Authorized", user: { ...userPayload, profileImage } });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").redirect("http://localhost:3000");
});

router.get("/profile/:userId", async (req, res) => {
  try {
    const userID = req.params.userId;
    const user = await User.findById(userID);

    if (!user) {
      console.log("No user found");
    }
    res.send(user); // Send actual user details
  } catch {}
});

router.post(
  "/updateUser/:userID",
  upload.fields([{ name: "profileImage" }, { name: "coverImage" }]),
  async (req, res) => {
    const data = req.body;
    const userID = req.params.userID;
    // const profileImage = req.files["profileImage"]
    //   ? req.files["profileImage"][0]
    //   : null;
    // const coverImage = req.files["coverImage"]
    //   ? req.files["coverImage"][0]
    //   : null;

    if (req.file) {
      const profileImage = req.files["profileImage"][0];
      const coverImage = req.files["coverImage"][0];

      try {
        const result = await User.findByIdAndUpdate(userID, {
          fullname: data.fullname,
          username: data.username,
          dob: data.dob,
          about: data.about,
          locaton: data.locaton,
          profileImage: `profileAndCoverImages/${profileImage.filename}`,
          coverImage: `profileAndCoverImages/${coverImage.filename}`,
        });

        if (!result) {
          return res.status(404).json({ error: "User not found" });
        }
      } catch (error) {
        console.log("Caught Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }else{
      try {
        const result = await User.findByIdAndUpdate(userID, {
          fullname: data.fullname,
          username: data.username,
          dob: data.dob,
          about: data.about,
          locaton: data.locaton,
        });

        if (!result) {
          return res.status(404).json({ error: "User not found" });
        }
      } catch (error) {
        console.log("Caught Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }

    res.redirect("http://localhost:3000");
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = router;
