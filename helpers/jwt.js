const jwt = require('jsonwebtoken')
const createError = require('http-errors')

function signAccessToken(userId, role) {
    return new Promise((resolve, reject) => {
        const payload = { userId, role }
        const secret = process.env.ACCESS_TOKEN_SECRET
        const options = {
            expiresIn: '1y',
            issuer: 'marline'
        };

        jwt.sign(payload, secret, options, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    })
}

const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return next(createError.Unauthorized());

    const bearerToken = authHeader.split(' ');

    if (bearerToken.length !== 2 || bearerToken[0] !== 'Bearer') {
        return next(createError.Unauthorized());
    }

    const token = bearerToken[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return next(createError.Unauthorized(err.message));
        }
        req.payload = payload;
        next();
    });
}

module.exports = {
    signAccessToken,
    verifyAccessToken
}