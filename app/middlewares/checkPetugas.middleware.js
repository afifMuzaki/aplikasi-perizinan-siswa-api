const { request, response } = require("express")

const checkPetugas = (req = request, res = response, next) => {
    const userRole = req.role;
    if(userRole != 'petugas') return res.sendStatus(403);
    next();
};

module.exports = checkPetugas;