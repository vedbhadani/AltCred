# AltCred - Alternative Credit Scoring Platform
# UNDER CONSTRUCTION

AltCred is a modern alternative credit scoring platform that uses alternative data and AI to generate credit scores for millions of "credit invisible" people, helping them access financial products they deserve.

## 🚀 Tech Stack

This is a **PERN Stack** project:

- **Frontend**: Next.js 14 (React 18) with JavaScript
- **Backend**: Node.js with Express.js
- **Database**: Supabase 
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
git clone <repository-url>
cd AltCred-1
```

### 2. Install all dependencies

```bash
# Install backend dependencies
npm run install:backend

# Install frontend dependencies
npm run install:frontend

# Or install all at once
npm run install:all
```

### 3. Database Setup

1. Create a PostgreSQL database
2. Copy `.env.example` to `.env` in the backend directory (create if doesn't exist)
3. Update the `DATABASE_URL` in `backend/.env`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/altcred?schema=public"
```

4. Run Prisma migrations:

```bash
cd backend
npm run prisma:migrate
npm run prisma:generate
```

## 🚀 Development

### Start Backend Server

```bash
# From root directory
npm run dev:backend

# Or from backend directory
cd backend
npm run dev
```

Backend runs on `http://localhost:3001` (or configured PORT)

### Start Frontend Server

```bash
# From root directory
npm run dev:frontend

# Or from frontend directory
cd frontend
npm run dev
```

Frontend runs on `http://localhost:3000`

### Start Both Servers

Run both servers in separate terminals, or use a process manager like `concurrently`.

## 🏗️ Build for Production

### Frontend Build

```bash
cd frontend
npm run build
npm start
```

### Backend Build

```bash
cd backend
npm start
```

## 📡 API Endpoints

See [docs/api-endpoints.md](docs/api-endpoints.md) for detailed API documentation.

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Credit (Protected Routes)
- `POST /api/credit/calculate` - Calculate credit score
- `GET /api/credit/history` - Get credit history

## 🎨 Features Included

### Frontend
- ✅ Custom triangle cursor animation
- ✅ Smooth scroll animations
- ✅ Navbar scroll effects
- ✅ Modal with form handling
- ✅ Responsive mobile menu
- ✅ Button ripple effects
- ✅ All original animations and interactions

### Backend
- ✅ User authentication (JWT)
- ✅ User registration and login
- ✅ Credit score models
- ✅ Transaction tracking
- ✅ Credit report generation
- ✅ Database models (User, CreditScore, Transaction, CreditReport)

## 🗄️ Database Schema

The database includes the following models:

- **User**: User accounts and authentication
- **CreditScore**: Credit scores with factors
- **Transaction**: Financial transactions
- **CreditReport**: Detailed credit reports

See [docs/data-models.md](docs/data-models.md) for detailed schema information.

## 📝 Environment Variables

### Backend (.env)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/altcred"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"
PORT=3001
NODE_ENV=development
```

### Frontend

Next.js automatically handles environment variables. Create `.env.local` if needed.

## 🧪 Testing

```bash
# Backend tests (when implemented)
cd backend
npm test

# Frontend tests (when implemented)
cd frontend
npm test
```

## 📚 Documentation

- [API Endpoints](docs/api-endpoints.md)
- [Architecture Diagram](docs/architecture-diagram.md)
- [Data Models](docs/data-models.md)
- [Vision & Goals](docs/vision.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

AltCred Team

## 🙏 Acknowledgments

- Built with modern web technologies
- Alternative credit scoring for financial inclusion

---

**Note**: This project is under active development. Some features may be incomplete or in progress.
