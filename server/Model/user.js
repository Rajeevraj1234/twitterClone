const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const {createTokenForUser} = require("../Services/authentication");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    about:{
      type:String,
    },
    dob:{
      type:String,
      required:true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required:true,
    },
    profileImage: {
      type: String,
      default: "/images/defaultProfile.jpg",
    },
    coverImage: {
      type: String,
      default: "/images/defaultCover.jpg",
    },
    locaton: {
      type: String,
      default:"WG Land"
    },
    links: {
      type: String,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    posts:[{
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    }],
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true , strictPopulate: false }
);

userSchema.pre("save", function (next) {
  const user = this;
  console.log(user);
  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not Found");

    const salt = user.salt;
    const hashedPassword = user.password;

    const checkHashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if(hashedPassword !== checkHashedPassword) throw new Error("Incorrect Password"); 
      
    const token = createTokenForUser(user);
    
    return token;
  }
);

const User = model("user", userSchema);

module.exports = User;
