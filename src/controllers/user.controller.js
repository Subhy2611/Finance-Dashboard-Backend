const userService = require('../services/user.service');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsersService();

    res.status(200).json({
      message: "Users fetched successfully",
      users
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Update role
const updateUserRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    const user = await userService.updateUserRoleService(userId, role);

    res.status(200).json({
      message: "User role updated",
      user
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Update status
const updateUserStatus = async (req, res) => {
  try {
    const userId = req.params.id;
    const { isActive } = req.body;

    const user = await userService.updateUserStatusService(userId, isActive);

    res.status(200).json({
      message: "User status updated",
      user
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  updateUserRole,
  updateUserStatus
};