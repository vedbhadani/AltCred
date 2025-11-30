# API Documentation

Base URL: `http://localhost:4000/api/v1`

## Authentication (`/auth`)

### Register User
*   **Endpoint:** `/auth/register`
*   **Method:** `POST`
*   **Description:** Creates a new user account.
*   **Body:**
    ```json
    {
      "full_name": "John Doe",
      "email": "john@example.com",
      "password": "securePassword123"
    }
    ```
*   **Response:** `201 Created`
    ```json
    {
      "user": { "id": "...", "email": "..." },
      "accessToken": "...",
      "refreshToken": "..."
    }
    ```

### Login
*   **Endpoint:** `/auth/login`
*   **Method:** `POST`
*   **Description:** Authenticates a user and returns tokens.
*   **Body:**
    ```json
    {
      "email": "john@example.com",
      "password": "securePassword123"
    }
    ```
*   **Response:** `200 OK`
    ```json
    {
      "user": { "id": "...", "email": "..." },
      "accessToken": "...",
      "refreshToken": "..."
    }
    ```

### Get Current User
*   **Endpoint:** `/auth/me`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Returns the profile of the currently logged-in user.

---

## Financial Assessment (`/intake`)

### Save Answers
*   **Endpoint:** `/intake/answers`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Saves the user's responses to the financial assessment questionnaire.
*   **Body:**
    ```json
    {
      "answers": {
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
    }
    ```

---

## Credit Score (`/credit-score`)

### Calculate Score
*   **Endpoint:** `/credit-score/calculate`
*   **Method:** `POST`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Triggers the ML engine to calculate a new credit score based on the latest saved answers.
*   **Body:** `{}` (Empty object)
*   **Response:** `200 OK`
    ```json
    {
      "score": 750,
      "category": "Excellent",
      "factors": { ... },
      "confidence": 0.85,
      "calculatedAt": "2023-10-27T10:00:00Z"
    }
    ```

### Get Latest Score
*   **Endpoint:** `/credit-score`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Retrieves the most recently calculated credit score for the user.

### Get Score History
*   **Endpoint:** `/credit-score/history`
*   **Method:** `GET`
*   **Headers:** `Authorization: Bearer <token>`
*   **Description:** Retrieves a list of past credit scores for the user.
