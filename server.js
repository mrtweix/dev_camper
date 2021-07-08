import dotenv from "dotenv";
// Load env vars
dotenv.config({ path: "./config/config.env" });

import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import runServer from "./utils/runServer.js";
import connectDB from "./config/connectDB.js";
import errorHandler from "./middlewares/errorHandler.js";

// Connect to database
connectDB();

// initialize app
const app = express();
// Body parser
app.use(express.json());
// Enable CORS
app.use(cors());
// logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Route files
import bootcamps from "./routes/bootcamps.route.js";
// Mount router
app.use("/api/v1/bootcamps", bootcamps);
// error handler
app.use(errorHandler);

// initiate server
runServer(app);
