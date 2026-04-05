const express = require('express');
const router = express.Router();

const { createRecord, getRecords, getDashboard } = require('../controllers/record.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Create record
router.post('/', authMiddleware, createRecord);

// Get records
router.get('/', authMiddleware, getRecords);

// Dashboard data
router.get('/dashboard', authMiddleware, getDashboard);

module.exports = router;