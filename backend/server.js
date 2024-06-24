import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import mongoDbConnection from "./db/mongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse body data
app.use(express.urlencoded({ extended: true })); // to parse body data
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} PORT 🚀`);
  mongoDbConnection();
});
