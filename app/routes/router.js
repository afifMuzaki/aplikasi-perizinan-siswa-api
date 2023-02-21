const { Router } = require('express');
const authCon = require('../controllers/auth.controller');
const siswaCon = require('../controllers/siswa.controller');
const verifyToken = require('../middlewares/auth.middleware');

const router = Router();

router.route('/api')
    .get(authCon.prototype.refreshToken);
router.route('/api/login')
    .post(authCon.prototype.login);
router.route('/api/logout')
    .get(authCon.prototype.logout);
router.route('/api/siswa')
    .get(verifyToken, siswaCon.prototype.getSiswa);

module.exports = router;