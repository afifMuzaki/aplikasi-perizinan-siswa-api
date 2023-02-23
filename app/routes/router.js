const { Router } = require('express');
const siswaRoute = require('./siswa.route');
const authRoute = require('./auth.route');
const petugasRoute = require('./petugas.route');

const router = Router();

router.use(authRoute); // Auth
router.use(siswaRoute); // Siswa
router.use(petugasRoute); // Petugas

module.exports = router;