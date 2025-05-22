const express = require('express');
const { createReminder } = require('../controllers/reminderController'); // Import controller function

const router = express.Router();

router.post('/', createReminder);

module.exports = router;
