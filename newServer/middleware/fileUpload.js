const multer = require("multer");
const storage = require("../utilities/multerStorage");
const Upload = require("../utilities/multerStorage");

const uploadFile = async (req, res, next) => {
  const upload = Upload();
  upload.any("file")(req, res, async (error) => {
    if (error) {
      res.status(400).json({
        error: {
          fileUpload: {
            message: `Failed to upload the file because ${error.message}`,
          },
        },
      });
    } else {
      next();
    }
  });
};
module.exports = uploadFile;
