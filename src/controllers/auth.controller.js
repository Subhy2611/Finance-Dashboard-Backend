const authService = require('../services/auth.service');

const signup = async (req, res) => {
  try {
    const user = await authService.signupService(req.body);

    // removing password
    const userObj = user.toObject();
    delete userObj.password;

    res.status(201).json({
      message: "User created successfully",
      user: userObj
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.loginService(req.body);

    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userObj
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  signup,
  login
};