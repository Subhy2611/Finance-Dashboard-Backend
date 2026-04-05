# Finance Dashboard Backend

A scalable backend system for managing personal financial transactions with secure authentication and role-based access control.

---

## Overview

This project is a RESTful backend application that allows users to:

* Track income and expenses
* Filter transactions based on multiple criteria
* View financial summaries via dashboard analytics
* Access data securely using JWT-based authentication

The system is designed with clean architecture principles and focuses on scalability, maintainability, and real-world backend practices.

---

## Key Features

### Authentication & Authorization

* JWT-based authentication
* Secure password hashing using bcrypt
* Role-Based Access Control (RBAC)

  * Viewer: Read-only access
  * Analyst: View records and insights
  * Admin: Full access

---

### Financial Records Management

* Create transactions (income/expense)
* Fetch all user-specific records
* Filter by:

  * Type (income / expense)
  * Category (food, salary, rent, etc.)
  * Date range

---

### Dashboard Analytics

* Total Income
* Total Expense
* Net Balance
* Category-wise breakdown

---

### Additional Features

* User-specific data isolation (secure multi-user system)
* Proper error handling and status codes
* Clean MVC-based architecture

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB, Mongoose
* Authentication: JWT, bcrypt
* Tools: Postman, Git, GitHub

---

## Project Structure

```
src/
 ├── controllers/
 ├── services/
 ├── models/
 ├── routes/
 ├── middlewares/
 ├── config/
 └── app.js
```

---

## API Endpoints

### Auth

* POST /api/auth/signup
* POST /api/auth/login

### Records

* POST /api/records → Create transaction
* GET /api/records → Get all records (with filters)
* GET /api/records/dashboard → Dashboard analytics
* GET /api/records/recent → Latest transactions

---

## Example Request

### Create Transaction

POST /api/records

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "note": "Monthly salary"
}
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Subhy2611/Finance-Dashboard-Backend.git
cd Finance-Dashboard-Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run Server

```bash
npm run dev
```

---

## Key Learnings

* Implemented secure authentication using JWT
* Designed role-based access control system
* Built dynamic filtering using query parameters
* Solved real-world date filtering edge cases
* Structured backend using scalable architecture

---

## Project Highlights

* Demonstrates strong understanding of backend fundamentals
* Covers authentication, authorization, and data security
* Includes real-world problem-solving (date filtering precision)
* Shows clean separation of concerns (MVC pattern)

---

## Future Improvements

* Pagination for large datasets
* API documentation (Swagger)
* Deployment (Render)
* Input validation (Joi/Zod)

---

## Author

Subham Ghosh

---

If you found this useful, feel free to star the repo.
