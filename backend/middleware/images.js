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
}).fields([
  { name: 'binaryImages', maxCount: 6 }, 
  { name: 'images', maxCount: 6 },       
])


const convertImageToBase64 = (req, res, next) => {

  const images = [];

  // if (req.files && req.files.length > 0) {
  //   req.files.forEach((file) => {
  //     const filePath = path.join(__dirname, '..', "uploads", file.filename);
  //     const fileData = fs.readFileSync(filePath, { encoding: "base64" });
     
  //     fs.unlinkSync(filePath);
    
  //     images.push(`data:${file.mimetype};base64,${fileData}`);
  //   });
  // }


  if (req.files && req.files['binaryImages']) {
    req.files['binaryImages'].forEach((file) => {
      const filePath = path.join(__dirname, '..', "uploads", file.filename);
      const fileData = fs.readFileSync(filePath, { encoding: "base64" });

      fs.unlinkSync(filePath); 

      images.push(`data:${file.mimetype};base64,${fileData}`);
    });
  }


  if (req.files && req.files['images']) {
    req.files['images'].forEach((file) => {
      const filePath = path.join(__dirname, '..', "uploads", file.filename);
      const fileData = fs.readFileSync(filePath, { encoding: "base64" });

      fs.unlinkSync(filePath); 

      images.push(`data:${file.mimetype};base64,${fileData}`);
    });
  }

  
  if (req.body.base64Images) {
    const base64img = JSON.parse(req.body.base64Images);
    base64img.forEach((image) => {
      if (typeof image === "string" && image.startsWith("data:image")) {
        images.push(image); 
      }
    });
  }
  

  req.body.images = images;
  console.log(images.length)
  next();
};

module.exports = { upload, convertImageToBase64 };
