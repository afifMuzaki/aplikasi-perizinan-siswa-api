const { Router } = require("express");
const Auth = require("../controllers/auth.controller");

const router = Router();
const authCon = new Auth();

router.post('/api/login', authCon.login);
router.all('/api/logout', authCon.logout);
router.get('/api/refresh', authCon.refreshToken);

module.exports = router;