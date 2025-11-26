require("dotenv").config();

const envKeys = [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
];

envKeys.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

module.exports = {
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};