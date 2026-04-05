const express = require('express');
const router = express.Router();

const { 
  createRecord, 
  getRecords, 
  updateRecord, 
  getDashboard, 
  getRecentRecords,
  deleteRecord
} = require('../controllers/record.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

// CREATE RECORD
// Analyst + Admin
router.post(
  '/',
  authMiddleware,
  roleMiddleware('analyst', 'admin'),
  createRecord
);

// READ DATA
// All roles
router.get(
  '/',
  authMiddleware,
  roleMiddleware('viewer', 'analyst', 'admin'),
  getRecords
);

// RECENT DATA
// All roles
router.get(
  '/recent',
  authMiddleware,
  roleMiddleware('viewer', 'analyst', 'admin'),
  getRecentRecords
);

// UPDATE DATA
// Analyst + Admin
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware('analyst', 'admin'),
  updateRecord
);

// DELETE DATA
// ONLY Admin
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  deleteRecord
);

// DASHBOARD DATA
// All roles
router.get(
  '/dashboard',
  authMiddleware,
  roleMiddleware('viewer', 'analyst', 'admin'),
  getDashboard
);

module.exports = router;