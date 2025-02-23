import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "sqlmastervyom.netlify.app" }));
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/api", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
