const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandling");
const userRouter = require("./routes/user");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ limit: "10mb", extended: true }));

  app.use(errorHandler);

// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true 
}));

// Routes
// app.use("/api/", authRouter);
app.use("/api/users/", userRouter);

app.get("/", (req, res) => res.send("William Hortone!"));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
