const express = require('express');

//const indexController = require('../controllers/index');

const router = express.Router()

router.use('/contacts', require('./contacts'));

// export
module.exports = router;