const { request, response } = require("express");

const checkGuru = (req = request, res = response) => {
    const userRole = req.role;
    if(userRole != 'guru') return res.sendStatus(403);
    next();
}

module.exports = checkGuru;