const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});


const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true); 
    } else {
      cb(new Error("Only image files are allowed"), false); 
    }
  },
}).array("images", 6); 


const convertImageToBase64 = (req, res, next) => {
  if (req.files && req.files.length > 0) { 
    try {
    
      req.body.images = req.files.map((file) => {
        const filePath = path.join(__dirname,'..', "uploads", file.filename);
        const fileData = fs.readFileSync(filePath, { encoding: "base64" });
      
        fs.unlinkSync(filePath);
        return `data:${file.mimetype};base64,${fileData}`;
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Failed to process images", details: err });
    }
  } else {
    req.body.images = []; 
  }
  next(); 
}

module.exports = { upload, convertImageToBase64 };
