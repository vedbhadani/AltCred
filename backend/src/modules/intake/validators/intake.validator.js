const allowedEmployment = ["<6 months", "6–12 months", "1–3 years", "3–5 years", ">5 years"]
const allowedIncomeStability = ["Fixed", "Slightly variable", "Highly variable"]
const allowedSavings = ["None", "<1 month", "1–3 months", "3–6 months", ">6 months"]
const allowedExpense = ["<40%", "40–60%", "60–75%", ">75%"]
const allowedLoan = ["Never taken", "Taken & repaid early/on time", "Taken & repaid late", "Taken & defaulted"]
const allowedBillPay = ["Always early", "On time", "Sometimes late", "Usually late"]
const allowedEducation = ["No formal education", "High school", "UG", "PG", "Professional degree"]
const allowedBudgetTrack = ["Yes, strictly", "Yes, loosely", "No"]

const allowedDependents = ["None", "1", "2–3", "more"]

function intakeValidator(req, res, next) {
  const { answers } = req.body;
  if (!answers || typeof (answers) !== "object") {
    return res.status(400).json({ message: "answers object is required" })
  }

  console.log('DEBUG: Received answers:', JSON.stringify(answers, null, 2));


  // Handle aliases from frontend
  const loanExperience = answers.loanExperience || answers.pastLoanExperience;
  const billDiscipline = answers.billDiscipline || answers.digitalBehavior;

  const {
    employmentStability,
    monthlyIncome,
    incomeStability,
    savingsBuffer,
    expenseRatio,
    dependents,
    educationLevel,
    financialDiscipline,
  } = answers;

  if (!employmentStability || !allowedEmployment.includes(employmentStability)) {
    return res.status(400).json({ message: "Invalid employment stability option" });
  }

  const incomeNum = Number(monthlyIncome);
  if (!monthlyIncome || isNaN(incomeNum) || !isFinite(incomeNum) || incomeNum <= 0) {
    return res.status(400).json({ message: "Monthly income must be a positive valid number" })
  }

  if (!incomeStability || !allowedIncomeStability.includes(incomeStability)) {
    return res.status(400).json({ message: "Invalid income stability option" });
  }

  if (!savingsBuffer || !allowedSavings.includes(savingsBuffer)) {
    return res.status(400).json({ message: "Invalid savings buffer option" })
  }

  if (!expenseRatio || !allowedExpense.includes(expenseRatio)) {
    return res.status(400).json({ message: "Invalid expense ratio option" })
  }

  if (!loanExperience || !allowedLoan.includes(loanExperience)) {
    return res.status(400).json({ message: "Invalid loan experience option" })
  }

  if (!billDiscipline || !allowedBillPay.includes(billDiscipline)) {
    return res.status(400).json({ message: "Invalid bill discipline option" });
  }

  if (!dependents || !allowedDependents.includes(dependents)) {
    return res.status(400).json({ message: "Invalid dependents option" })
  }

  if (!educationLevel || !allowedEducation.includes(educationLevel)) {
    return res.status(400).json({ message: "Invalid education option" })
  }

  if (!financialDiscipline || !allowedBudgetTrack.includes(financialDiscipline)) {
    return res.status(400).json({ message: "Invalid financial discipline option" })
  }

  // Normalize answers for controller/service
  req.body.answers = {
    ...answers,
    loanExperience,
    billDiscipline
  };

  next()
}

module.exports = intakeValidator;
