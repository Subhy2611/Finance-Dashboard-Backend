const User = require('../models/user.model');

// Get all users
const getAllUsersService = async () => {
  return await User.find().select('-password');
};

// Update role
const updateUserRoleService = async (userId, role) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select('-password');

  if (!user) throw new Error("User not found");

  return user;
};

// Update status
const updateUserStatusService = async (userId, isActive) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isActive },
    { new: true }
  ).select('-password');

  if (!user) throw new Error("User not found");

  return user;
};

module.exports = {
  getAllUsersService,
  updateUserRoleService,
  updateUserStatusService
};