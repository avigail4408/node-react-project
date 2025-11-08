require("dotenv").config()
const jwt = require("jsonwebtoken")

const verifyWT = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization
    if (!authHeader?.startsWith("Bearer "))
        return res.status(401).json({ message: "Unauthorized" })

    const token = authHeader.split(" ")[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) return res.status(401).json({ message: "Forbidden" })
            req.user = decode
            next()
        }
    )
}
module.exports = verifyWT


// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// const verifyWT = (req, res, next) => {
//     const authHeader = req.headers.Authorization || req.headers.authorization;

//     // 1. בדיקה ראשונית: האם כותרת Authorization קיימת ובפורמט "Bearer <token>"?
//     if (!authHeader?.startsWith("Bearer ")) {
//         // אם לא, מחזירים 401 (Unauthorized) ו**יוצאים מיד** מהפונקציה.
//         return res.status(401).json({ message: "אימות נדרש: חסר טוקן או פורמט לא תקין." });
//     }

//     const token = authHeader.split(" ")[1]; // מבודדים את הטוקן עצמו

//     // 2. אימות הטוקן באמצעות JWT
//     jwt.verify(
//         token,
//         process.env.ACCESS_TOKEN_SECRET,
//         (err, decode) => {
//             // אם יש שגיאה באימות (למשל, הטוקן פג תוקף, שונה, או לא חוקי)
//             if (err) {
//                 // מחזירים 403 (Forbidden) ו**יוצאים מיד** מהפונקציה.
//                 return res.status(403).json({ message: "אסור: טוקן לא חוקי או פג תוקף." });
//             }

//             // אם הגענו לכאן, הטוקן אומת בהצלחה.
//             // מוגדרים את req.user עם המידע המפוענח.
//             // לוודא שה-payload של הטוקן שלך אכן מכיל את UserInfo
//             // (אם הטוקן נוצר עם { UserInfo: { ... } })
//             req.user = decode.UserInfo; 
            
//             // אם הטוקן שלך נוצר עם: { id, username, roles } ישירות ב-root של ה-payload,
//             // אז השאר את השורה הבאה במקום הקודמת:
//             // req.user = decode; 

//             // וממשיכים למידלוויר הבא בשרשרת
//             next();
//         }
//     );
// };

// module.exports = verifyWT;