import multer from "multer";
import * as IPFS from "ipfs-core";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadImage = async (req, res) => {
  const { file } = req;
  try {
    const node = await IPFS.create();
    const fileAdded = await node.add({
      content: file.buffer,
    });
    file.CID = fileAdded.path;
    return res.status(200).json({
      status: "success",
      cid: req.file.CID,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failure",
    });
  }
};
export { upload, uploadImage, storage };
