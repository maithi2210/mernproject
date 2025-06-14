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
2. Install Backend Dependencies
```bash
cd server
npm install
```
3. Install Frontend Dependencies
```bash
cd ../client
npm install
```
4. Configure Environment Variables
Create a .env file in the server/ directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```
5. Run the Application

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
🚀 Deployment
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
📸 Screenshots

1. Register Form
![image](https://github.com/user-attachments/assets/5d0bbedc-c095-4058-bdb3-97243cc56256)

2. Login Form
![image](https://github.com/user-attachments/assets/fbc853b6-64c3-46f5-8266-5432af6155e5)


3. Expense Management System
![image](https://github.com/user-attachments/assets/f032b17b-51f9-4f9f-a423-8067c3589c5b)
![image](https://github.com/user-attachments/assets/1025af18-ef71-49a9-939b-36cb1b1facd6)

4.Add Transaction
![image](https://github.com/user-attachments/assets/37b6191c-7e30-47d4-a87c-0e4a72e546da)


5.Edit Transaction
![image](https://github.com/user-attachments/assets/5ff0afae-f206-4476-ac92-c65b0a43e394)


6.Delete Transaction
![image](https://github.com/user-attachments/assets/32913fcd-f961-426c-8b7e-915a02d47fad)


🧑‍💻 Author
Maithili Ambavale

GitHub: @maithi2210

📄 License
This project is licensed under the MIT License.



