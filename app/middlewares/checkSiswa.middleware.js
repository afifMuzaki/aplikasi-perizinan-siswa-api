const { request, response } = require("express");

const checkSiswa = (req = request, res = response, next) => {
    const userRole = req.role;
    if(userRole != 'siswa') return res.sendStatus(403);
    next();
}

module.exports = checkSiswa;