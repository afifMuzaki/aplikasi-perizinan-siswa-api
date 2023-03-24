const { Router } = require("express");
const Petugas = require("../controllers/petugas.controller");
const verifyToken = require("../middlewares/auth.middleware");
const checkPetugas = require("../middlewares/checkPetugas.middleware");

const router = Router();
const petugasCon = new Petugas();

router.get('/api/petugas/izins/request', verifyToken, checkPetugas, petugasCon.permintaanIzin);
router.post('/api/petugas/izins/verify', verifyToken, checkPetugas, petugasCon.persetujuanIzin);
router.get('/api/petugas/izins/history', verifyToken, checkPetugas, petugasCon.riwayatIzin);
router.get('/api/petugas/izins/print', verifyToken, checkPetugas, petugasCon.getIzinById);

module.exports = router;