const { request, response } = require("express");

const checkAdmin = (req = request, res = response, next) => {
    const userRole = req.role;
    if(userRole != 'admin') return res.sendStatus(403);
    next();
}

module.exports = checkAdmin;