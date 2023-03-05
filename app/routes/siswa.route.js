const { Router } = require("express");
const Siswa = require("../controllers/siswa.controller");
const verifyToken = require("../middlewares/auth.middleware");
const checkSiswa = require("../middlewares/checkSiswa.middleware");

const router = Router();
const siswaCon = new Siswa();

router.post('/api/siswa/izin', verifyToken, checkSiswa, siswaCon.entriIzin);
// router.route('/api/siswa/izin/:id')
router.get('/api/siswa/izin/:id', verifyToken, checkSiswa, siswaCon.getIzinByid)
router.put('/api/siswa/izin/:id', verifyToken, checkSiswa, siswaCon.editIzin)
router.delete('/api/siswa/izin/:id', verifyToken, checkSiswa, siswaCon.deleteIzinById);

module.exports = router;