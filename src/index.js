const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const userRoutes = require("./routes/users");

const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://aled-server.onrender.com/'
}))
app.use("/api", userRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((e) => console.log(e));

app.listen(port, () => console.log("Server listening on port ", port));
