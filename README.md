# Dev Mentorship Tracker API - Week 1

Express RESTful API following MVC architecture for tracking mentorship milestone submissions.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Architecture:** Model-View-Controller (MVC)

## API Endpoints

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/submissions` | Fetch all submissions | `200 OK` |
| `GET` | `/api/submissions/:id` | Fetch a single submission by ID | `200 OK` / `404 Not Found` |
| `POST` | `/api/submissions` | Create a new submission | `201 Created` / `400 Bad Request` |
| `PUT` | `/api/submissions/:id` | Update submission status/description | `200 OK` / `404 Not Found` |
| `DELETE` | `/api/submissions/:id` | Delete a submission by ID | `200 OK` / `404 Not Found` |

## Testing
Fully verified via **cURL** and **Postman**.