const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', controller.getHome);

router.post('/find', controller.findLocation);

router.get('/find', controller.returnHome);

module.exports = router;