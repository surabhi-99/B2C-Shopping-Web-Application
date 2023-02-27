const express = require("express");
const { getAllProducts, CreateProduct, updateProduct, deleteProduct, getProductDetails} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(CreateProduct);

router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)



module.exports = router