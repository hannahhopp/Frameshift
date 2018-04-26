const path = require('path');
const express = require('express');
const router = express.Router();
module.exports = router;

router.use(express.static(path.join(__dirname, '..', '..', 'public')));
