import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";

dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
    "https://sqlmastervyom.netlify.app",
    "https://sqlmasteradmin.netlify.app"
];

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/api", dataRoutes);

// Error Handling Middleware (for better debugging)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
