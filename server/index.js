const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./Routes/userRoute")
const postRoute = require("./Routes/postRoute")
const {checkForAunthicationCookie} = require("./middlewares/authentication")
const path = require("path");
const app = express();
const cors = require("cors")
const PORT = 8000;


app.use(cors({
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAunthicationCookie("token"))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.static(path.resolve('./public')));


mongoose
  .connect("mongodb://127.0.0.1:27017/twitter-backend")
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log("Error while Connecting"));


app.use("/user",userRoute);
app.use("/post",postRoute);


app.listen(PORT, () => console.log("Connect to PORT:", PORT));
