const dotenv = require("dotenv");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/contact');
dotenv.config();   

const app = express();
app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.use('/',routes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });




