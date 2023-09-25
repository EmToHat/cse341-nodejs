const express = require('express');
const router = express.Router()

const indexController = require('../controllers/professional');

router.get('/', indexController.getData);


// export
module.exports = router;