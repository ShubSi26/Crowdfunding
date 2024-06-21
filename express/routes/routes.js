const express = require('express');
const auth = require('./login');
const project = require('./projects');
const profile = require('./profile');


const router = express.Router();
router.use('/auth', auth);
router.use('/project',project);
router.use("/profiledetails",profile);

module.exports = router;