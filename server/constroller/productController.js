const Product = require("../models/productModels")
const Basket=require("../models/basketModels")


const getAllProduct = async (req, res) => {
    console.log(req.user);
    const product = await Product.find().lean()
    res.json(product)
}

const getById = async (req,res) => {
    const { id } = req.params
    const findProd = await Product.findById(id)
    if(!findProd)
        return res.status(404).json({message:"ID is missing from reqrest"})
    res.json(findProd)  
}

const addProduct = async (req, res) => {
    const { name, price, descreption,image} = req.body
    if (!name || !descreption || price==null)
        return res.status(400).json({ message: "all the fields are requried" })
    const findobj = await Product.findOne({ name })
    if (findobj)
        return res.status(400).json({ message: "the product is exsist" })
    const newProduct = await Product.create({ name, price, descreption,image })
    res.json(newProduct)
}

const updateProduct = async (req, res) => {
    const { name, price, descreption,image,inStok } = req.body
    if (!name || !price || !descreption) {
        return res.status(400).json({ message: "all the fields are requried" })
    }
    const updateproduct = await Product.findOne({ name })
    if (!updateproduct)
        return res.status(400).json({ message: "the product is not exsist" })

    updateproduct.name = name
    updateproduct.price = price
    updateproduct.descreption = descreption
    updateproduct.image = image
    updateproduct.inStok = inStok


    const updateProd = await updateproduct.save()
    res.json(updateProd)

}
const deleteProdect = async (req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({message:"all the fields are requried"})
    }
    const fildProduct = await Product.findOne({name})
    if(!fildProduct){
        return res.status(404).json({message:"the product is not exsist"})
    }

    await fildProduct.deleteOne()
    return res.json({message: "delete successfully"})
}

const deleteAllProdect = async (req,res) => {
    await Product.deleteMany()
    
    res.send("the products delete successfully")

}

module.exports = {
    getAllProduct,
    getById,
    addProduct,
    updateProduct,
    deleteProdect,
    deleteAllProdect
}