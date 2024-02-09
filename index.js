const express = require("express");
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URL);

app.use(express.static(path.join(__dirname, "dist")));
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/admin", require("./routes/todoRoutes"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
  // res.status(404).json({ message: "Resource Not Found" });
});

mongoose.connection.once("open", () => {
  console.log("MONGO CONNECTED");
  app.listen(5000, console.log("SERVER RUNNING"));
});
