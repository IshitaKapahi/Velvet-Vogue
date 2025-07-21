const { createProduct } = require("../controllers/productController");
const verifyToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/multer");
const router = require("express").Router();

router.post ("/create-profuct", verifyToken ,upload.array("images", 4) , createProduct);
module.exports = router;