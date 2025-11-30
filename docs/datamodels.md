# Data Models

This document details the database schema and data structures used in the AltCred application.

## Database Schema (Supabase / PostgreSQL)

### 1. Users Table (`users`)
Stores user account information. Managed largely by Supabase Auth, but extended for application use.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Primary Key. Unique identifier for the user. |
| `email` | `VARCHAR` | User's email address. Unique. |
| `full_name` | `VARCHAR` | User's full name. |
| `created_at` | `TIMESTAMP` | Timestamp of account creation. |

### 2. User Answers Table (`user_answers`)
Stores the raw responses from the financial assessment questionnaire.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Primary Key. |
| `user_id` | `UUID` | Foreign Key referencing `users.id`. |
| `answers` | `JSONB` | The structured questionnaire responses. |
| `created_at` | `TIMESTAMP` | Timestamp of submission. |

#### `answers` JSON Structure
```json
{
  "employmentStability": "1-3 years",
  "monthlyIncome": "50000",
  "incomeStability": "Fixed",
  "savingsBuffer": "3-6 months",
  "expenseRatio": "40-60%",
  "pastLoanExperience": "Never taken",
  "digitalBehavior": "Always early",
  "dependents": "2-3",
  "educationLevel": "UG",
  "financialDiscipline": "Yes, strictly"
}
```

### 3. Credit Scores Table (`credit_scores`)
Stores the calculated credit scores and their breakdown.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` | Primary Key. |
| `user_id` | `UUID` | Foreign Key referencing `users.id`. |
| `score` | `INTEGER` | The calculated credit score (300-850). |
| `category` | `VARCHAR` | Risk category (e.g., "Excellent", "Fair"). |
| `factors` | `JSONB` | Detailed breakdown of the score components. |
| `confidence` | `FLOAT` | Confidence score of the calculation (0.0 - 1.0). |
| `calculated_at` | `TIMESTAMP` | Timestamp of calculation. |

#### `factors` JSON Structure
```json
{
  "paymentHistory": {
    "score": 85,
    "weight": 35,
    "contribution": 29.75
  },
  "financialStability": {
    "score": 70,
    "weight": 25,
    "contribution": 17.5
  },
  "incomeFactors": {
    "score": 90,
    "weight": 20,
    "contribution": 18.0
  },
  "responsibility": {
    "score": 80,
    "weight": 20,
    "contribution": 16.0
  }
}
```

## Relationships

*   **One-to-Many**: A `User` can have multiple `UserAnswers` (history of assessments).
*   **One-to-Many**: A `User` can have multiple `CreditScores` (history of scores).
*   The application typically queries the *latest* entry for both answers and scores.
