const { Router } = require("express");
const Siswa = require("../controllers/siswa.controller");
const verifyToken = require("../middlewares/auth.middleware");

const router = Router();
const siswaCon = new Siswa();

router.route('/api/izin')
    .post(verifyToken, siswaCon.entriIzin);

module.exports = router;