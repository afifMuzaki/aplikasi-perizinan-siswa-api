const { request, response } = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = (req = request, res = response, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({message: 'Silahkan Login!'});

    const token = authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err) {
            res.sendStatus(403);
            console.log(err);
        }
        req.kredensial = decoded.userKredensial;
        req.username = decoded.userName;
        req.role = decoded.userRole;
        next()
    });
};

module.exports = verifyToken;