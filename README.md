# Expense Management System

This is a full-stack Expense Management Web Application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in, and manage their personal expenses efficiently.

## 📌 Features

- User Registration & Login (with session/token-based authentication)
- Add, View, Edit, and Delete Expenses
- Monthly expense tracking
- Responsive UI using Bootstrap
- Secure password handling with bcrypt
- MongoDB database integration

## 🛠️ Technologies Used

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web application framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM for Node.js
- **bcrypt** – Password hashing
- **express-session** or **jsonwebtoken (JWT)** – Session/token management

### Frontend
- **React** – Frontend UI library
- **Bootstrap 5** – Styling and layout
- **Axios or Fetch** – For API requests

## 📂 Project Structure

Expense-Management-System/
│
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js
│
├── server/ # Express backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

bash
Copy
Edit

## ⚙️ Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/expense-management-system.git
cd expense-management-system
```
### 2. Install Backend Dependencies
```bash
cd server
npm install
```
### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```
### 4. Configure Environment Variables
Create a .env file in the server/ directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```
### 5. Run the Application

# Run backend
```
cd server
npm start
```
# Run frontend (in a separate terminal)
```
cd client
npm start
```

### 🚀 Deployment
You can deploy the frontend on Vercel or Netlify, and the backend on Render, Railway, or Heroku.

🧩 Modules to Add to package.json (Backend)
Ensure these packages are added in your backend:

```bash

npm install express mongoose bcrypt cors dotenv
npm install --save-dev nodemon
```
Optionally, if you're using JWT for auth:

```
npm install jsonwebtoken
```
For frontend (React):

```bash

npm install axios react-router-dom bootstrap
```
### 📸 Screenshots

1. Register Form
![image](https://github.com/user-attachments/assets/e5522ad0-e2bd-4869-8df5-0e12218f968d)

2. Login Form
![image](https://github.com/user-attachments/assets/19c7c7f7-4a52-44f6-b2f5-6e90d76458da)

3. Expense Management System
![image](https://github.com/user-attachments/assets/f032b17b-51f9-4f9f-a423-8067c3589c5b)
![image](https://github.com/user-attachments/assets/1025af18-ef71-49a9-939b-36cb1b1facd6)

4.Add Transaction
![image](https://github.com/user-attachments/assets/86c28f97-f612-431d-b055-ab3dce4f5c57)

5.Edit Transaction
![image](https://github.com/user-attachments/assets/7950f7d2-baab-433e-a5b6-cf5ad3ab3fe9)


6.Delete Transaction
![image](https://github.com/user-attachments/assets/32913fcd-f961-426c-8b7e-915a02d47fad)


### 🧑‍💻 Author
Maithili Ambavale

GitHub: @maithi2210


### 📄 License
This project is licensed under the MIT License.



