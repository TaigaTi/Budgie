# 🐦 Budgie

**Budgie** is a cute and simple expense tracker to help you take control of your finances. Track your incomes and expenses, view your spending patterns, and manage your budget with ease!

## 🔧 Tech Stack

- **Frontend**: Angular
- **Backend**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Containerization**: Docker + Docker Compose

## 🌟 Features

- User registration and login (JWT-based authentication)
- Add, edit, and delete expenses and incomes
- Categorize transactions (e.g. Food, Rent, Travel)
- Transaction history and monthly summaries
- Optional: Visual charts for spending overview

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/budgie.git
cd budgie

# Start the app with Docker
docker-compose up --build
```



# Project Structure
/frontend     --> Angular app (Budgie UI)
/backend      --> Node.js + Prisma API
/docker       --> Docker and environment config

Frontend: http://localhost:4200
Backend API: http://localhost:3000/api

# 📦 Environment Variables
Make sure to copy the .env.example file to .env in the /backend folder and set your variables:

```
DATABASE_URL=postgresql://user:password@db:5432/budgiedb
JWT_SECRET=your_secret_key
```
