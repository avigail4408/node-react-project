const verifyWT = require("../middleware/verifyWT")
const express = require("express")
const router = express.Router()
const basketController = require("../constroller/basketConstroller")

router.use(verifyWT)
router.get("/",basketController.getAll)
router.get("/:id",basketController.getById)
router.delete("/deleteOne",basketController.deleteProduct)
router.delete("/deleteAll",basketController.deleteAllProduct)
router.put("/plusOne",basketController.plusOne)
router.put("/minusOne",basketController.minusOne)
router.post("/addProductToBasket",basketController.addProductToBasket)

module.exports = router