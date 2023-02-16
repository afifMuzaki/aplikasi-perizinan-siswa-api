const express = require('express');
const router = express.Router();
const Siswa = require('../controllers/siswa.controller');

router.route('/api/siswa')
    .get(Siswa.prototype.getSiswa)
    .post(Siswa.prototype.addSiswa)

module.exports = router;