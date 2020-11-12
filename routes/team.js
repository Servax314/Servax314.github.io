const express = require('express');
const router = express.Router();

router.get('/team', (req,res) => res.sendFile('team.html', { root: './views'}));

module.exports = router;
