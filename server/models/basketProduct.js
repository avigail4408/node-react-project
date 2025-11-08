const mongoose = require("mongoose")
const basketProduct = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default:1,
    },
    productID: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required: true
    }
},
    {
       
    })

    module.exports =basketProduct