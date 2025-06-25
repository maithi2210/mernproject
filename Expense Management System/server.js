const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// Root endpoint for test
app.get("/", (req, res) => {
  res.send("API is running");
});

// Export the app for Vercel
module.exports = app;

// If run locally (not in Vercel), start the server
if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
