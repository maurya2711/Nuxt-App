const multer = require("multer");
const Aws = require("aws-sdk");
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
});

const filefilter = (req, file, cb) => {
  console.log("In file filter upload pdf", file)
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadPdf = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});


module.exports = {uploadPdf , s3}