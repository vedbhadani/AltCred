const jwt = require("jsonwebtoken");
const { jwtAccessSecret, jwtRefreshSecret } = require("../../../config/env");

function ensureSecret(secret, name) {
    if (!secret) {
        throw new Error(`${name} is not set`);
    }
}

ensureSecret(jwtAccessSecret, "JWT_ACCESS_SECRET");
ensureSecret(jwtRefreshSecret, "JWT_REFRESH_SECRET");

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, jwtAccessSecret, {
        expiresIn: "30m",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, jwtRefreshSecret, {
        expiresIn: "7d",
    });
};

const verifyRefreshToken = (token) => {
    return jwt.verify(token, jwtRefreshSecret);
};

const verifyAccessToken = (token) => {
    return jwt.verify(token, jwtAccessSecret);
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
};