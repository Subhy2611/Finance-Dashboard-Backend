const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  updateUserRole,
  updateUserStatus
} = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

// Get all users (Admin only)
router.get(
  '/',
  authMiddleware,
  roleMiddleware('admin'),
  getAllUsers
);

// Update role
router.put(
  '/:id/role',
  authMiddleware,
  roleMiddleware('admin'),
  updateUserRole
);

// Update status
router.put(
  '/:id/status',
  authMiddleware,
  roleMiddleware('admin'),
  updateUserStatus
);

module.exports = router;