import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// dotenv config
dotenv.config();

// Database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
