require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("./config/database").connect();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./model/users");
const Aws = require("aws-sdk");
// const corsOptions = {
//   origin: "https://localhost:8081",
// };

const multer = require("multer");

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_ACCESS_KEY_SECRET,
});

const port = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use("/data", require("./routes/routes"));

//
function getClientIP(req) {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
}

app.post("/", upload.single("image"), (req, res) => {
  console.log("Upload-------------->", req.file);
  const params = {
    Bucket: process.env.MY_AWS_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: "public-read-write",
    ContentType: "image/jpeg",
  };

  try {
    const { firstName, secondName, email, password, image } = req.body;
    if (!firstName || !secondName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    s3.upload(params, async (error, data) => {
      if (error) {
        res.status(500).send({ err: error });
      }

      const oldUser = await User.findOne({ email });
      if (oldUser) {
        res.status(409).json({ message: "User already exists" });
      }

      encryptedPassword = await bcrypt.hash(password, 10);
      let obj = {
        firstName,
        secondName,
        email: email.toLowerCase(),
        password: encryptedPassword,
        image: data.Location,
      };
      const user = await User.create(obj);

      const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user.token = token;
      res
        .status(201)
        .json({ message: "User created successfully", user, success: true });
    });
  } catch (err) {
    res.status(500).send({ message: "Error in uploading image" });
  }
});
app.get("/", async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json({ message: "user found successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const ip = getClientIP(req);
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
        expiresIn: "9h",
      });
      user.token = token;
      return res
        .status(200)
        .json({
          message: "User logged in successfully",
          user,
          ip,
          success: true,
        });
    }
    res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", success: false });
  }
});

module.exports = app;
