import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/Db.js";
import authroutes from "./routes/authRouter.js";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT;

app.use("/api/v1/auth", authroutes);
app.listen(PORT, () => {
  console.log(`'listening on port'${PORT}`.bgCyan.red);
});
