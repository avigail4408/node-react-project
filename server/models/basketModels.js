const mongoose = require("mongoose")
const basketProduct = require("./basketProduct")
const productSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: [basketProduct],
    totalSum: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("basket", productSchema)