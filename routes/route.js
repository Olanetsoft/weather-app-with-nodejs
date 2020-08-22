const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', controller.getHome);

router.post('/find', controller.findLocation);

module.exports = router;