const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token || req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized access" });

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(400).json({ success: false, message: "Token is not valid" });

            req.id = user.id;
            req.role = user.role;
            next();
        }
        );

    } catch (err) {
        return res.status(500).json({ success: false, message: "Invalid Token" });
    }
};
module.exports = verifyToken;