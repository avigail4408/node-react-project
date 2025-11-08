require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModels")

const login = async (req, res) => {
    const { userName, password } = req.body
    if (!userName || !password)
        return res.status(400).send("All fields are required")
    const foundUser = await User.findOne({ userName }).lean()
    if (!foundUser || !foundUser.active)
        return res.status(400).send("Unauthorized")
    const match = await bcrypt.compare(password, foundUser.password)//משווה בין הסיסמא שלהמשתמש לבין מה שבכנס
    if (!match)
        return res.status(400).send("Unauthorized")
    const userInfo = {//כדי לצור צמיד צריך את נתוני המשתמש
        _id: foundUser._id, 
        name: foundUser.name,
        roles: foundUser.roles, 
        userName: foundUser.userName,
        email: foundUser.email, 
        phone: foundUser.phone
    }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)//יוצר token
    res.json({accessToken})
}

const register = async (req, res) => {
    const { userName, password, name, phone, email } = req.body
    if (!userName || !password || !name)
        return res.status(400).send("All fields are required")
    const fuondUser = await User.findOne({ userName }).lean()
    if (fuondUser)
        return res.status(400).send("Unauthorized")
    const bcryptPassword = await bcrypt.hash(password, 10)//יוצר סיסמא מוצפנת
    const updateUser = { userName, password: bcryptPassword, name, phone, email }
    const newUser = await User.create(updateUser)
    if (newUser)
        res.json({message:newUser.name + " created"})
}

module.exports = { login, register }