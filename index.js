const express = require("express");
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/admin", require("./routes/todoRoutes"));

mongoose.connection.once("open", () => {
  console.log("MONGO CONNECTED");
  app.listen(5000, console.log("SERVER RUNNING"));
});
