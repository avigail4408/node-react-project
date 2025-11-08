const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    descreption:{
        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    inStok: {
        type: Boolean,
        default: true,
        required:false
    },
    image: {
        type:String,
        required:false
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema)


