const AuthService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await AuthService.registerUser(name, email, password);
    const { user } = result;
    const safeUser = user && { id: user.id, fullName: user.fullName, email: user.email };
    res.status(201).json({ message: 'User registered successfully', user: safeUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.loginUser(email, password);
    const { user } = result;
    const safeUser = user && { id: user.id, fullName: user.fullName, email: user.email };
    res.status(200).json({ message: 'Login successful', user: safeUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };
