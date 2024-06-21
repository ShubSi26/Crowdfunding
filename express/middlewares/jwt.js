
const jwt = require("jsonwebtoken");
const JWT_SECRET = "dropa";

const JWTMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({});
    }

    const token = authHeader;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.id = decoded.key;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    JWTMiddleware
}