# AltCred - Alternative Credit Scoring Platform
# UNDER CONSTRUCTION

AltCred is a modern alternative credit scoring platform that uses alternative data and AI to generate credit scores for millions of "credit invisible" people, helping them access financial products they deserve.

## 🚀 Tech Stack

This is a **PERN Stack** project:

- **Frontend**: Next.js 14 (React 18) with JavaScript
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication

## ✨ Features

### Frontend Features
- ✅ **Modern React UI**: Built with Next.js for optimal performance
- ✅ **Custom Triangle Cursor**: Smooth, animated custom cursor
- ✅ **Smooth Animations**: Scroll-triggered fade-in animations
- ✅ **Responsive Design**: Mobile-friendly with hamburger menu
- ✅ **Modal Forms**: Interactive get-started modal
- ✅ **Button Interactions**: Ripple effects on buttons
- ✅ **Dark Theme**: Beautiful sky-blue themed UI

### Backend Features
- ✅ **RESTful API**: Express.js backend with proper routing
- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Prisma ORM**: Type-safe database operations
- ✅ **User Management**: User registration, login, profile management
- ✅ **Credit Scoring**: Credit score calculation system (in development)
- ✅ **Transaction Tracking**: Track user transactions
- ✅ **Credit Reports**: Generate detailed credit reports

## 📁 Project Structure

```
AltCred-1/
├── frontend/                 # Next.js React Application
│   ├── components/          # React components
│   │   ├── CustomCursor.js
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── ProblemSection.js
│   │   ├── SolutionSection.js
│   │   ├── ScoringSection.js
│   │   ├── ScoreSegmentsSection.js
│   │   ├── FeaturesSection.js
│   │   ├── TechStackSection.js
│   │   ├── CTASection.js
│   │   ├── Footer.js
│   │   └── GetStartedModal.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useCustomCursor.js
│   │   ├── useScrollAnimations.js
│   │   └── useNavbarScroll.js
│   ├── pages/              # Next.js pages
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   ├── styles/             # Global styles
│   │   └── globals.css
│   └── public/             # Static assets
│       └── logo.png
│
├── backend/                 # Express.js Backend API
│   ├── prisma/             # Prisma schema and migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── constants/      # Constants (scoring, errors, etc.)
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   └── server.js           # Express server entry point
│
└── docs/                    # Documentation
    ├── api-endpoints.md
    ├── architecture-diagram.md
    ├── data-models.md
    └── vision.md
```

## 🛠️ Prerequisites

- **Node.js** >= 14.0.0
- **npm** or **yarn**
- **PostgreSQL** database
- **Git**

## 📦 Installation

### 1. Clone the repository

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
