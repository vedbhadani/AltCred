const { PrismaClient, TransactionType, TransactionStatus, TransactionCategory } = require('@prisma/client');
const prisma = new PrismaClient();

// Export enums for use in other files
module.exports.TransactionType = TransactionType;
module.exports.TransactionStatus = TransactionStatus;
module.exports.TransactionCategory = TransactionCategory;

class Transaction {
  static async create({
    userId,
    amount,
    type = TransactionType.EXPENSE,
    category = TransactionCategory.OTHER,
    description = '',
    transactionDate = new Date(),
    status = TransactionStatus.PENDING,
    metadata = null
  }) {
    return prisma.transaction.create({
      data: {
        userId,
        amount,
        type,
        category,
        description,
        transactionDate,
        status,
        metadata,
      },
    });
  }

  static async getByUser(userId, { startDate, endDate, limit = 50, offset = 0 }) {
    const where = { userId };
    
    if (startDate || endDate) {
      where.transactionDate = {};
      if (startDate) where.transactionDate.gte = new Date(startDate);
      if (endDate) where.transactionDate.lte = new Date(endDate);
    }

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        orderBy: { transactionDate: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.transaction.count({ where })
    ]);

    return { transactions, total };
  }

  static async getById(id, userId) {
    return prisma.transaction.findFirst({
      where: { id, userId },
    });
  }

  static async getSummary(userId, { startDate, endDate }) {
    const where = { userId };
    
    if (startDate || endDate) {
      where.transactionDate = {};
      if (startDate) where.transactionDate.gte = new Date(startDate);
      if (endDate) where.transactionDate.lte = new Date(endDate);
    }

    const result = await prisma.transaction.groupBy({
      by: ['type'],
      where,
      _sum: {
        amount: true,
      },
      _count: true,
    });

    return result.reduce((acc, { type, _sum, _count }) => ({
      ...acc,
      [type.toLowerCase()]: {
        total: Number(_sum.amount) || 0,
        count: _count,
      },
    }), { income: { total: 0, count: 0 }, expense: { total: 0, count: 0 } });
  }

  static async updateStatus(id, userId, status) {
    return prisma.transaction.update({
      where: { id, userId },
      data: { status },
    });
  }

  static async delete(id, userId) {
    return prisma.transaction.delete({
      where: { id, userId },
    });
  }
}

module.exports = Transaction;
