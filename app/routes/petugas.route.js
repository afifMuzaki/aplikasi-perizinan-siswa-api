const { Router } = require("express");
const Petugas = require("../controllers/petugas.controller");
const verifyToken = require("../middlewares/auth.middleware");
const checkPetugas = require("../middlewares/checkPetugas.middleware");

const router = Router();
const petugasCon = new Petugas();

router.get('/api/petugas/izins', verifyToken, checkPetugas, petugasCon.tampilSemuaIzin);
router.post('/api/petugas/izin/verify/:id', verifyToken, checkPetugas, petugasCon.persetujuanIzin);

module.exports = router;