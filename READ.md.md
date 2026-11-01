# Mentorship Tracker API

A production-ready RESTful backend service built with Node.js, Express, and MongoDB. The application provides dynamic user authentication, role-based authorization, and submission tracking for mentorship programs and code reviews.

---

## 🚀 Key Features

- **Authentication & Security**: Secure user registration and login utilizing `bcryptjs` for password hashing and stateless JSON Web Tokens (JWT) for route authorization.
- **Role-Based Access**: Structured schemas supporting distinct user profiles (`mentor` and `mentee`).
- **Submission Management**: Comprehensive CRUD operations for tracking mentorship requests, repository links, milestone titles, and execution statuses.
- **Automated API Testing**: Pre-configured Postman collection featuring post-response scripts that automatically capture and persist authentication tokens across protected requests.
- **Robust Error Handling**: Centralized middleware handling Mongoose validation errors, duplicate key constraints, and HTTP status codes.

---

## 🛠️ Tech Stack

- **Runtime Layer**: Node.js
- **Web Framework**: Express.js
- **Database Architecture**: MongoDB & Mongoose ODM
- **Security & Tokens**: `jsonwebtoken`, `bcryptjs`
- **Testing & API Tooling**: Postman

---

## 📁 Repository Structure

```text
BuildLab_Project/
├── src/
│   ├── config/          # Database connection settings
│   ├── controllers/     # Authentication & Submission request handlers
│   ├── middleware/      # JWT auth guard & error handler middleware
│   ├── models/          # Mongoose database schemas (User, Submission)
│   └── routes/          # Express route definitions
├── .env                 # Environment configurations (Git-ignored)
├── .gitignore           # File exclusion rules
├── package.json         # Project dependencies & scripts
├── README.md            # Project documentation
└── Mentorship Tracker API.postman_collection.json  # Exported Postman collection