const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword, comparePasswords } = require('../utils/hash.util');
const { generateToken } = require('../utils/token.util');

class User {
  static async create({ email, password, fullName, phoneNumber }) {
    const hashedPassword = await hashPassword(password);
    return prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        fullName,
        phoneNumber,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
        createdAt: true,
      },
    });
  }

  static async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async findById(id) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
        createdAt: true,
      },
    });
  }

  static async verifyCredentials(email, password) {
    const user = await this.findByEmail(email);
    if (!user) return null;

    const isValid = await comparePasswords(password, user.passwordHash);
    return isValid ? user : null;
  }

  static async updateProfile(userId, data) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
      },
    });
  }
}

module.exports = User;
