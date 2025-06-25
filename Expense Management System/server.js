const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");

// config dot env file
dotenv.config();

// database call
connectDB();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// Fix the port configuration
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
