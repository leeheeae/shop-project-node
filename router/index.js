const express = require('express');
const router = express.Router();

const db = require('../config/db');

router.get('/', async (req, res) => {
    return res.send('dd');
});

module.exports = router;
