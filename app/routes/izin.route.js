const { Router } = require("express");
const Izin = require("../controllers/izin.controller");
const verifyToken = require("../middlewares/auth.middleware");

const router = Router();
const izinCon = new Izin();

router.get('/api/guru/all', verifyToken, izinCon.getAllGuru);
router.get('/api/mapel/all', verifyToken, izinCon.getAllMapel);
router.get('/api/siswa/identity', verifyToken, izinCon.getSiswaIdentity);
router.get('/api/kategori/all', verifyToken, izinCon.getAllCategory);

module.exports = router;