const { supabase } = require("../../../config/supabase")
const bcrypt = require("bcrypt")
const jwt = require("../utils/auth.utils")

const register = async (req, res) => {
  const { full_name, email, password } = req.body
  try {
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (user) {
      return res.status(400).json({ "message": "User already exists" })
    }
    const passHash = await bcrypt.hash(password, 10)

    const { data: newUser, error } = await supabase
      .from("users")
      .insert([{ full_name, email, password: passHash }])
      .select("*")
      .single();

    if (error) {
      return res.status(500).json({ message: "Error creating user", details: error.message });
    }

    const accessToken = jwt.generateAccessToken(newUser);
    const refreshToken = jwt.generateRefreshToken(newUser);

    return {
      user: newUser,
      accessToken,
      refreshToken
    };
  }
  catch (err) {
    return res.status(500).json({ message: "Server error", details: err.message });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    return res.status(400).json({ "message": "Invalid credentials" })
  }
  const checkPass = await bcrypt.compare(password, user.password)
  if (!checkPass) {
    return res.status(400).json({ "message": "Invalid credentials" })
  }

  const accessToken = jwt.generateAccessToken(user)
  const refreshToken = jwt.generateRefreshToken(user)

  return { user, accessToken, refreshToken }
}

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body || {};
  if (!refreshToken) {
    return res.status(400).json({ message: 'refreshToken is required' });
  }

  try {
    const decoded = jwt.verifyRefreshToken(refreshToken);
    const accessToken = jwt.generateAccessToken({
      id: decoded.id,
      email: decoded.email,
    });
    return { accessToken };
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired refresh token' });
  }
}

const getMe = async (req, res) => {
  const id = req.user.id
  const { data: user, err } = await supabase
    .from("users")
    .select("id,full_name,email")
    .eq("id", id)
    .single();

  if (err) {
    return res.status(500).json({ "message": "Error fetching user" })
  }
  return user
}

module.exports = { register, login, refreshToken, getMe }