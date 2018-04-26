const router = require('express').Router();
const bodyParser = require('body-parser');
module.exports = router;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
