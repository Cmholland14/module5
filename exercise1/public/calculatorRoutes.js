const express = require('express');
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
res.send('Add')
})
module.exports = router;