const express = require('express');
const router = express.Router();
const { Admin } = require('../controllers/Admin');

router.route('/admin')
    .get(Admin.prototype.test);

module.exports = router;