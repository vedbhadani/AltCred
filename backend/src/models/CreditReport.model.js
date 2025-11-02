const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CreditReport {
  static async generateReport(userId) {
    // Get the latest credit score
    const latestScore = await prisma.creditScore.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!latestScore) {
      throw new Error('No credit score found for user');
    }

    // Get recent transactions (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
        transactionDate: {
          gte: sixMonthsAgo,
        },
      },
      orderBy: {
        transactionDate: 'desc',
      },
    });

    // Calculate payment history
    const paymentHistory = this.calculatePaymentHistory(transactions);

    // Generate report
    const report = {
      userId,
      score: latestScore.score,
      scoreDate: latestScore.createdAt,
      factors: latestScore.factors,
      paymentHistory,
      creditUtilization: this.calculateCreditUtilization(transactions),
      creditAge: this.calculateCreditAge(transactions),
      creditMix: this.calculateCreditMix(transactions),
      newCredit: this.calculateNewCredit(transactions),
      reportDate: new Date(),
    };

    // Save the report
    return prisma.creditReport.create({
      data: report,
    });
  }

  static async getLatestReport(userId) {
    return prisma.creditReport.findFirst({
      where: { userId },
      orderBy: { reportDate: 'desc' },
    });
  }

  static async getReportHistory(userId, limit = 12) {
    return prisma.creditReport.findMany({
      where: { userId },
      orderBy: { reportDate: 'desc' },
      take: limit,
      select: {
        id: true,
        score: true,
        reportDate: true,
      },
    });
  }

  // Helper methods
  static calculatePaymentHistory(transactions) {
    // Implementation for calculating payment history
    return {
      onTimePayments: 0,
      latePayments: 0,
      missedPayments: 0,
      paymentPercentage: 0,
    };
  }

  static calculateCreditUtilization(transactions) {
    // Implementation for calculating credit utilization
    return {
      totalCreditLimit: 0,
      currentBalance: 0,
      utilizationPercentage: 0,
    };
  }

  static calculateCreditAge(transactions) {
    // Implementation for calculating credit age
    return {
      oldestAccountAge: 0,
      averageAccountAge: 0,
    };
  }

  static calculateCreditMix(transactions) {
    // Implementation for calculating credit mix
    return {
      accountTypes: [],
      totalAccounts: 0,
    };
  }

  static calculateNewCredit(transactions) {
    // Implementation for calculating new credit
    return {
      recentInquiries: 0,
      newAccounts: 0,
    };
  }
}

module.exports = CreditReport;
