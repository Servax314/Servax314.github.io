const express = require('express');
const router = express.Router();

router.get('/robot', (req,res) => res.sendFile('robot.html', { root: './views'}));

module.exports = router;
