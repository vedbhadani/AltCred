const { supabase } = require("../../../config/supabase")
const bcrypt = require("bcrypt")
const jwt = require("../utils/auth.utils")

const register = async (userData) => {
  const { full_name, email, password } = userData

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (user) {
    throw new Error("User already exists");
  }

  const passHash = await bcrypt.hash(password, 10)

  const { data: newUser, error } = await supabase
    .from("users")
    .insert([{ full_name, email, password: passHash }])
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const accessToken = jwt.generateAccessToken(newUser);
  const refreshToken = jwt.generateRefreshToken(newUser);

  return {
    user: newUser,
    accessToken,
    refreshToken
  };
}

const login = async (credentials) => {
  const { email, password } = credentials
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    throw new Error("Invalid credentials");
  }
  const checkPass = await bcrypt.compare(password, user.password)
  if (!checkPass) {
    throw new Error("Invalid credentials");
  }

  const accessToken = jwt.generateAccessToken(user)
  const refreshToken = jwt.generateRefreshToken(user)

  return { user, accessToken, refreshToken }
}

const refreshToken = async (token) => {
  if (!token) {
    throw new Error('refreshToken is required');
  }

  try {
    const decoded = jwt.verifyRefreshToken(token);
    const accessToken = jwt.generateAccessToken({
      id: decoded.id,
      email: decoded.email,
    });
    return { accessToken };
  } catch (err) {
    throw new Error('Invalid or expired refresh token');
  }
}

const getMe = async (userId) => {
  const { data: user, error } = await supabase
    .from("users")
    .select("id,full_name,email")
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error("Error fetching user");
  }
  return user
}

module.exports = { register, login, refreshToken, getMe }