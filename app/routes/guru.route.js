const { Router } = require('express');
const Guru = require('../controllers/guru.controller');
const verifyToken = require('../middlewares/auth.middleware');
const checkGuru = require('../middlewares/checkGuru.middleware');

const router = Router();
const guruCon = new Guru();

router.get('/api/guru/izins/request', verifyToken, checkGuru, guruCon.permintaanIzin);
router.post('/api/guru/izins/verify', verifyToken, checkGuru, guruCon.persetujuanIzin);

module.exports = router;