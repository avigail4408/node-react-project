const verifyWT = require("../middleware/verifyWT")
const verifyRoel=require("../middleware/verifyRoel")
const express = require("express")
const router = express.Router()
const productController = require("../constroller/productController")
router.get("/products",productController.getAllProduct)
router.get("/:id", productController.getById)
router.post("/addProduct",verifyWT,verifyRoel, productController.addProduct)
router.put("/updateProduct",verifyWT,verifyRoel,productController.updateProduct)
router.delete("/deletProduct",verifyWT,verifyRoel, productController.deleteProdect)
router.delete("/deletAllProduct",verifyWT, verifyRoel,productController.deleteAllProdect)

module.exports = router