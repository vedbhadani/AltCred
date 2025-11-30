# AltCred - AI-Driven Alternative Credit Scoring

**AltCred** is a financial inclusion platform that uses alternative data points to generate credit scores for individuals with little to no credit history. By analyzing factors like employment stability, income patterns, and financial discipline, AltCred provides a fair and dynamic assessment of creditworthiness.

![AltCred Dashboard](frontend/public/Screenshot_2025-11-30_at_10.59.20_AM-removebg-preview.png)

## 🚀 Features

*   **Financial Assessment Engine**: A comprehensive 10-point questionnaire capturing alternative data (income stability, savings buffer, digital behavior).
*   **ML Scoring Model**: A weighted algorithmic engine that processes raw inputs into a normalized FICO-like score (300-850).
*   **Real-time Dashboard**: Visualizes credit scores with color-coded risk categories and detailed factor breakdowns.
*   **Secure Authentication**: JWT-based Login and Signup system with protected routes.
*   **Responsive Design**: Modern, dark-themed UI built with Next.js and Framer Motion.

## 🛠️ Tech Stack

*   **Frontend**: Next.js (Pages Router), React, Tailwind CSS, Framer Motion
*   **Backend**: Node.js, Express.js
*   **Database**: Supabase (PostgreSQL)
*   **Authentication**: JWT (JSON Web Tokens)
*   **ML/Logic**: Custom Weighted Scoring Algorithm (Node.js)

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js (v16+)
*   NPM
*   A Supabase account

### 1. Clone the Repository
```bash
git clone https://github.com/Archisman-NC/AltCred.git
cd AltCred
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=4000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
JWT_ACCESS_SECRET=your_random_secret_string
JWT_REFRESH_SECRET=your_random_secret_string
```

**Database Schema:**
Run the SQL script located in `backend/src/modules/credit-score/schema.sql` in your Supabase SQL Editor to create the necessary tables.

### 3. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Running the Application
You need to run both servers simultaneously.

**Start Backend:**
```bash
cd backend
npm run dev
```

**Start Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` to view the app.

## 🧠 How the Scoring Works

The credit score is calculated based on 4 key pillars:

1.  **Payment History (35%)**: Analyzes past loan behavior and bill payment discipline.
2.  **Financial Stability (25%)**: Evaluates savings buffer and expense ratios.
3.  **Income Factors (20%)**: Considers income amount and stability.
4.  **Responsibility (20%)**: Looks at education level and number of dependents.

The raw answers are normalized to a 0-1 scale and processed through a weighted algorithm to generate a score between 300 and 850.

## 📂 Project Structure

```
AltCred/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/          # Authentication logic
│   │   │   ├── credit-score/  # ML Model & Scoring logic
│   │   │   └── intake/        # Assessment form handling
│   │   └── server.js          # Entry point
├── frontend/
│   ├── src/
│   │   ├── pages/             # Next.js Pages (Dashboard, Login, etc.)
│   │   ├── components/        # Reusable UI components
│   │   └── utils/             # API clients & helpers
```

## 📄 License
This project is licensed under the MIT License.
