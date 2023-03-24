const { Router } = require('express');
const siswaRoute = require('./siswa.route');
const guruRoute = require('./guru.route');
const authRoute = require('./auth.route');
const petugasRoute = require('./petugas.route');
const izinRouter = require('./izin.route');
const adminRouter = require('./admin.route');

const router = Router();

router.use(authRoute); // Auth
router.use(adminRouter);
router.use(siswaRoute); // Siswa
router.use(guruRoute); // Guru
router.use(petugasRoute); // Petugas
router.use(izinRouter); // Izin

module.exports = router;