// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

import multer from "multer";
import path from "path";

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const fileFilter = (req, file, cb) => {
  // Check file type
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Please upload an image."), false);
  }
};

const imageUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default imageUpload;
