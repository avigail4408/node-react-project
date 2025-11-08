const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    active: {
        type: Boolean,
        default: true

    }
}, {
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)




