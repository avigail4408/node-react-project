const Basket = require("../models/basketModels")
const Product = require("../models/productModels")

const getAll = async (req, res) => {
    const basket = await Basket.find({ userid: req.user._id }).populate("products.productID").lean()
    res.json(basket)
}

const getById = async (req, res) => {
    const { productID } = req.params
    const basket = await Basket.findOne({ userid: req.user._id }).populate("products.productID")
    const findProd = basket.products.find((p) => {
        return p.productID.toString() === productID
    })
    if (!findProd)
        return res.status(400).json({ message: "ID is missing from reqrest" })
    res.json(findProd)
}

const deleteProduct = async (req, res) => {
    const { productID } = req.body
    if (!productID) {
        return res.status(400).json({ message: "ID is missing from reqrest" })
    }
    const product = await Product.findById(productID)
    if (!product || !product.inStok) {
        return res.status(400).json({ message: "the product not fount" })
    }

    const basket = await Basket.findOne({ userid: req.user._id })
    if (!basket) {
        return res.status(401).json({ message: "basket not found" })
    }


    const productDelete = basket.products.filter((p) => {
        return p.productID.toString() != productID
    })
    if (!productDelete) {
        return res.status(401).json({ message: "the product not exsisting in the basket" })
    }
    console.log("product ", basket.products[0].count);
    basket.products = productDelete
    if (productDelete.length >= 1)
        basket.totalSum -= Number(product.price * basket.products[0].count)
    else
        basket.totalSum = 0
    await basket.save()
    //res.send(`${objFind.name} deleted`)
    res.send(`${product.name} deleted successfully`)
}

const deleteAllProduct = async (req, res) => {
    // צריך לבדוק איך מחקים הכל
    // res.send(`${objFind.name} deleted`)
    const basket = await Basket.findOne({ userid: req.user._id })
    if (!basket) {
        return res.status(401).json({ message: "basket not found" })
    }

    basket.totalSum = 0
    basket.products = []
    await basket.save()
    res.send(`your ${req.user.name}: basket delete successfully `)
}

const plusOne = async (req, res) => {
    const { productID } = req.body
    if (!productID) {
        return res.status(400).json({ message: "ID is missing from reqrest" })
    }
    const product = await Product.findById(productID)
    if (!product || !product.inStok) {
        return res.status(400).json({ message: "the product not fount" })
    }

    const basket = await Basket.findOne({ userid: req.user._id })
    if (!basket) {
        return res.status(401).json({ message: "basket not found" })
    }
    const pruductPlus = basket.products.find((p) => {
        return p.productID.toString() === productID
    })
    if (!pruductPlus) {
        return res.status(400).json({ message: "the product dont exsit in the basket" })
    }

    pruductPlus.count += 1
    basket.totalSum += product.price

    const updateProd = await basket.save()
    res.json(updateProd)
}

const minusOne = async (req, res) => {
    const { productID } = req.body
    if (!productID) {
        return res.status(400).json({ message: "ID is missing from reqrest" })
    }
    const product = await Product.findById(productID)
    if (!product || !product.inStok) {
        return res.status(400).json({ message: "the product not fount" })
    }

    const basket = await Basket.findOne({ userid: req.user._id })
    if (!basket) {
        return res.status(401).json({ message: "basket not found" })
    }

    const productMinus = basket.products.find((p) => {
        return p.productID.toString() === productID
    })
    if (!productMinus) {
        return res.status(400).json({ message: "the product dont exsit in the basket" })
    }

    if (productMinus.count > 1) {
        productMinus.count -= 1
        basket.totalSum -= product.price
    }
    const updateProd = await basket.save()
    res.send(updateProd)


}

const addProductToBasket = async (req, res) => {
    //לבדוק מה בעניין המזהה name
    const { productID } = req.body
    if (!productID) {
        return res.status(400).json({ message: "no get productID" })
    }

    const product = await Product.findById(productID)
    if (!product || !product.inStok) {
        return res.status(400).json({ message: "the product not fount" })
    }

    const basketProduct = {
        name: product.name,
        count: 1,
        productID: product._id,
        image: product.image,
        totalSum: 0
    }
    let basket = await Basket.findOne({ userid: req.user._id })
    if (!basket)
        basket = new Basket({ userid: req.user._id, products: [], totalSum: 0 })

    const existing = basket.products.find(p => {
        return productID === p.productID.toString()
    })

    if (existing) {
        existing.count += 1
    }
    else
        basket.products.push(basketProduct)

    basket.totalSum += product.price
    await basket.save()
    res.json({ message: `${product.name} add to basket` })
}




module.exports = { getAll, getById, deleteProduct, deleteAllProduct, plusOne, minusOne, addProductToBasket }