const express = require('express');
const router = express.Router();

router.get('/architecture', (req,res) => res.sendFile('architecture.html', { root: './views'}));

module.exports = router;
