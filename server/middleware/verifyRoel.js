
const verifyWT =require("./verifyWT")
const verifyRoel = (req, res, next) => {
    // if (!req.user)
    //     return res.status(401).json({ message: "לא מחובר" })
    if (req.user.roles != "Admin")
        return res.status(401).json({ message: "אין הרשאה,מנהל בלבד" })
    next()
}
module.exports = verifyRoel