# User CRUD API

A simple RESTful API for managing users with CRUD operations, built using Node.js, Express, and MongoDB.

## Features
- Create, Read, Update, and Delete (CRUD) users.
- Data validation using Zod.
- MongoDB integration with Mongoose.

---
## Tech Stack
- **Backend:** Node.js, Express.js,Mongoose
- **Database:** MongoDB
- **Validation:** Zod
- **Environment Variables:** dotenv

## 🛠 Setup Instructions

1. **Clone the repository**:

   ```bash
   git https://github.com/HemantKr071/Zylentrix_Assignment.git

2. **Navigate to the backend folder**:

   ```bash
   cd zylentrix_assignment
   cd backend
3. **Install the required dependencies**:

   ```bash
   npm install

4. **Set up environment variables**:
   Create a **.env** file in the backend directory and add the following content:
   ```bash
   MONGO_URL=mongodb://localhost:27017/
5. **Start the backend server**:
   ```bash
   npm start
The server will run on http://localhost:3000

# 📌 API Endpoints Documentation

---

## 1. Create a New User  
**Endpoint:** `POST /users`  
**Description:** Creates a new user in the database.

**Request:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}
```

**Response:(201 CREATED)**
```json
{
  "message": "User created successfully",
  "user": {
    "_id": "65a5b6c7d8e9f00112233445",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25,
    "createdAt": "2024-03-13T10:00:00.000Z"
}
```

---
## 2. Retrieve All Users  
**Endpoint:** `GET /users`  
**Description:** Retrieves all users.

### 🔹Response (200 OK):
```json
[
  {
    "_id": "65a5b6c7d8e9f00112233445",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25
  },
  {
    "_id": "65a5b6c7d8e9f00112233446",
    "name": "Alice Smith",
    "email": "alice@example.com",
    "age": 30
  }
]
```
---
## 3. Retrieve a Single User  
**Endpoint:** `GET /users/:id`  
**Description:** Fetches details of a specific user by ID.

### 🔹 Response (200 OK):
```json
{
  "_id": "65a5b6c7d8e9f00112233445",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}
```
**Error Response:(404 Not Found)**
```json
{
 "message": "User not found"
}
```

---
## 4. Update a User  
**Endpoint:** `PUT /users/:id`  
**Description:** Updates an existing user's information.

### 🔹 Request Body:
```json
{
  "name": "John Updated",
  "age": 26
}
```
### 🔹 Response (200 OK):
```json
{
   "message": "User updated successfully",
  "user": {
    "_id": "65a5b6c7d8e9f00112233445",
    "name": "John Updated",
    "email": "johndoe@example.com",
    "age": 26
}
```
**Error Response:(404 Not Found)**
```json
{
 "message": "User not found"
}
```
## 5. Delete a User  
**Endpoint:** `DELETE /users/:id`  
**Description:** Deletes a user from the database.

### 🔹 Response (200 OK):
```json
{
   "message": "User deleted successfully",
}
```
**Error Response:(404 Not Found)**
```json
{
 "message": "User not found"
}
```

---

## 📜 License
This project is **MIT Licensed**.

---

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repo.
2. Create a new branch (`feature-newFeature`).
3. Commit changes and push.
4. Submit a PR.
