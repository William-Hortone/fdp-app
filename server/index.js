const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandling");
const userRouter = require("./routes/user");
const articleRouter = require("./routes/article");
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
app.use(
  cors({
    // origin: "https://fdp-app-client.vercel.app",
    origin: "http://localhost:5003",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Routes
app.use("/api/users/", userRouter);
app.use("/api/articles", articleRouter);

app.get("/", (req, res) => res.send("William Hortone!"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
