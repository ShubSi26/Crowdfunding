
const jwt = require("jsonwebtoken");
const{jwtSecret} = require("../secret");

const JWTMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({});
    }

    const token = authHeader;

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.id = decoded.key;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    JWTMiddleware
}