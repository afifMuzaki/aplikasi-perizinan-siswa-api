const { Router } = require('express');
const authCon = require('../controllers/auth.controller');
const izinCon = require('../controllers/perizinan.controller');
const siswaCon = require('../controllers/siswa.controller');
const verifyToken = require('../middlewares/auth.middleware');

const router = Router();

// Auth
router.post('/api/login', authCon.prototype.login);
router.get('/api/logout', authCon.prototype.logout);
router.get('/api/refresh', authCon.prototype.refreshToken);

router.get('/api/siswa', verifyToken, siswaCon.prototype.getSiswa);

// Izin (Siswa)
router.post('/api/izin', verifyToken, izinCon.prototype.entriIzin);
router.get('/api/izin', izinCon.prototype.getAllIzins);

module.exports = router;