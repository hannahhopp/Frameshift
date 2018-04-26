const router = require('express').Router();
const morgan = require('morgan');
module.exports = router;

router.use(morgan('dev'));
