# Finance Dashboard Backend

A scalable backend system for managing financial records with secure authentication, role-based access control, and analytical dashboard APIs.

---

## Overview

This project is a RESTful backend application designed to simulate a real-world finance dashboard system where users interact with financial data based on their assigned roles.

The system focuses on clean architecture, secure access control, and structured API design.

---

## Features Implemented

* User and Role Management
* Financial Records CRUD Operations
* Record Filtering (date, category, type)
* Dashboard Summary APIs (totals and category insights)
* Role-Based Access Control (RBAC)
* Input Validation and Error Handling
* Data Persistence using MongoDB

---

## Role-Based Access System

| Role    | Permissions                              |
| ------- | ---------------------------------------- |
| Viewer  | View own records and dashboard           |
| Analyst | View and update records, access insights |
| Admin   | Full access including user management    |

---

## API Endpoints

### Authentication

* POST /api/auth/signup
* POST /api/auth/login

### Records

* POST /api/records
* GET /api/records
* GET /api/records/recent
* PUT /api/records/:id
* DELETE /api/records/:id
* GET /api/records/dashboard

### User Management (Admin Only)

* GET /api/users
* PUT /api/users/:id/role
* PUT /api/users/:id/status

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB, Mongoose
* Authentication: JWT, bcrypt
* Tools: Postman, Git, GitHub

---

## Project Structure

The project follows a modular MVC-inspired architecture to ensure scalability, maintainability, and separation of concerns.

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

### Controllers

Controllers handle incoming HTTP requests and send responses back to the client. They act as a bridge between routes and services.

Example: auth.controller.js, record.controller.js, user.controller.js

---

### Services

Services contain the core business logic of the application. They interact with models and process data before returning it to controllers.

Example: auth.service.js, record.service.js, user.service.js

---

### Models

Models define the structure of the database using Mongoose schemas. They represent how data is stored in MongoDB.

Example: user.model.js, record.model.js

---

### Routes

Routes define API endpoints and map them to corresponding controller functions. They also apply middleware for authentication and role-based access control.

Example: auth.routes.js, record.routes.js, user.routes.js

---

### Middlewares

Middlewares are used to process requests before they reach controllers. They handle tasks such as authentication and authorization.

Example:

* auth.middleware.js → verifies JWT token
* role.middleware.js → restricts access based on user role

---

### Config

Contains configuration-related code such as database connection setup.

Example: db.js

---

### app.js

The central file that initializes the Express application, applies global middleware, and connects all routes.

---

## Architecture Flow

Request Flow:

Client → Route → Middleware → Controller → Service → Model → Database

Response Flow:

Database → Model → Service → Controller → Client

---

## Setup Instructions

1. Clone Repository

```
git clone https://github.com/Subhy2611/Finance-Dashboard-Backend.git
cd Finance-Dashboard-Backend
```

2. Install Dependencies

```
npm install
```

3. Create .env file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run Server

```
npm run dev
```

---

## Key Highlights

* Implemented secure JWT authentication
* Designed role-based access control system
* Built modular backend using MVC architecture
* Ensured data isolation between users
* Developed dynamic filtering and dashboard aggregation APIs

---

## Author

Subham Ghosh
