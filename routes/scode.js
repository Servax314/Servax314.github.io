const express = require('express');
const router = express.Router();

router.get('/scode', (req,res) => res.sendFile('scode.html', { root: './views'}));

module.exports = router;
