const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Upload image only admin can use
router.post("/upload", (req, res) => {
  try {
    console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(200).json({ msg: "No files were uploaded." });
    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(200).json({ msg: "Size too large" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(200).json({ msg: "File format is incorrect." });
    }
    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "test" },
      async (err, result) => {
        if (err) throw err;
        removeTmp(file.tempFilePath);
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

// Delete image only admin can use
router.post("/delete", (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.status(200).json({ msg: "No images Selected" });

    cloudinary.v2.uploader.delete(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "Deleted Image" });
    });
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

/* The fs.unlink() method is used to remove a file or symbolic link from the filesystem. This function does not work on directories, therefore it is recommended to use fs.rmdir() to remove a directory.*/
const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
