const { prisma } = require('../config/database');
const { hashPassword, comparePassword } = require('../utils/hash.util');
const { generateToken } = require('../utils/token.util');

const registerUser = async (name, email, password) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error('User already exists');

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { fullName: name, email, passwordHash: hashed },
  });

  const token = generateToken({ id: user.id, email: user.email });
  return { user, token };
};

const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  const match = await comparePassword(password, user.passwordHash);
  if (!match) throw new Error('Invalid email or password');

  const token = generateToken({ id: user.id, email: user.email });
  return { user, token };
};

module.exports = { registerUser, loginUser };
