const router = require('express').Router();
module.exports = router;

router.use('/api', require('./api'));
