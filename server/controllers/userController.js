//userController.js
const { hashSync } = require("bcryptjs");
const User = require('../models/user'); 

async function createUser(req, res) {
  try {
    const { f_name, l_name, email, category, password } = req.body;
    if (typeof f_name !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (typeof l_name !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error('Invalid email address');
    }
    if (typeof category !== 'string') {
      throw new Error(' First name must be strings');
    }
    if (typeof password !== 'string') {
      throw new Error('Password must be a string');
    }
    const newUser = await User.create({ f_name, l_name, email, category, password });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user." });
  }
}

async function getUser(req, res) {
  try {
    const { reg_id } = req.params; // Accessing reg_id from URL parameters
    const user = await User.findByPk(reg_id, { attributes: ['f_name'] });

    if (user) {
      res.json({
        name: user.f_name, // Include the reg_id in the response
      });
    } else {
      return res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Failed to fetch user." });
  }
}


async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).json({ message: "Email not found!" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }
    
    res.json({
      message: `Welcome, ${user.f_name}`,
      reg_id: user.reg_id, // Include the reg_id in the response
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function changePassword(req, res) {
  try {
    const { reg_id, currentPassword, newPassword } = req.body;
    
    const user = await User.findByPk(reg_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verify current password
    if (currentPassword !== user.password) {
      return res.status(400).json({ message: "Incorrect current password." });
    }

    // Update user's password
    await user.update({ password: newPassword });

    return res.status(200).json({ message: "Password changed successfully." });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ message: "Failed to change password." });
  }
}

module.exports = { getUser, createUser, login, changePassword };
