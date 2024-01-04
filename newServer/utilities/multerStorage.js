const multer = require("multer");
const path = require("path");

const fileUpload = () => {
  let imageName;
  const fileLocation = path.join(
    `${__dirname}/../../newClient/public/images/doctorImages`
  );

  const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, fileLocation);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
      imageName = Date.now() + "-" + file.originalname;

      req.body.avatar = imageName;
    },
  });

  const upload = multer({
    storage: fileStorageEngine,
    limits: {
      fileSize: 1024 * 1024 * 5, // 5 MB (adjust the limit as needed)
    },
  });
  return upload;
};
module.exports = fileUpload;
