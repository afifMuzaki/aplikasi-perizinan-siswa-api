const { Router } = require("express");
const Siswa = require("../controllers/siswa.controller");
const verifyToken = require("../middlewares/auth.middleware");
const checkSiswa = require("../middlewares/checkSiswa.middleware");

const router = Router();
const siswaCon = new Siswa();

router.post('/api/siswa/izin', verifyToken, checkSiswa, siswaCon.entriIzin);
router.get('/api/siswa/izins/history', verifyToken, checkSiswa, siswaCon.riwayatIzin);

module.exports = router;