const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API runned !");
});

app.use("/api/user", userRoutes);
app.listen(5000, () => {
  console.log("SERVER STARTED !".yellow.bold);
});
