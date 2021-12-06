const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/getstream.js");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 5000;

app.use("/getstream", authRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
