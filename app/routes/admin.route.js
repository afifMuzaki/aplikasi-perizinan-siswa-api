const { Router } = require('express');
const Admin = require('../controllers/admin.controller');
const verifyToken = require('../middlewares/auth.middleware');
const checkAdmin = require('../middlewares/checkAdmin.middleware');

const router = Router();
const adminCon = new Admin();

router.get('/api/admin/category', verifyToken, checkAdmin, adminCon.getAllCategory);

module.exports = router;