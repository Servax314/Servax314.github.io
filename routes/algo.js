const express = require('express');
const router = express.Router();

router.get('/algo', (req,res) => res.sendFile('algo.html', { root: './views'}));

module.exports = router;
