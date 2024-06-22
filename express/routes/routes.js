const express = require('express');
const auth = require('./login');
const path = require('path');
const project = require('./projects');
const profile = require('./profile');
const payment  = require('./payment');


const router = express.Router();
router.use('/auth', auth);
router.use('/project',project);
router.use("/profiledetails",profile);
router.use("/payment",payment);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;