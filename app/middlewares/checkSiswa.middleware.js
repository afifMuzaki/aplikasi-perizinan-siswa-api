const { request, response } = require("express");

const checkSiswa = (req = request, res = response) => {
    const userRole = req.role;
    if(userRole != 'siswa') return res.sendStatus(403);
    next();
}

module.exports = checkSiswa;