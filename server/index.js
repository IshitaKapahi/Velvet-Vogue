
// import express
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const { readDir, readdirSync } = require("fs");
const connectDB = require('./db/connection');

//initialize express
const app = express();
dotenv.config();


//port number
const port = process.env.PORT || 5000;

//handeling connection errors
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
connectDB(); //connect to database
// routes
app.get("/", (req, res) => {
    res.send(`<h1>Server Running</h1>`);
});

//dynamically include routes..It will give js files in array
readdirSync("./routes").map((route) => app.use("/api", require(`./routes/${route}`)))

//listen to port
app.listen(port, () => console.log(`Server is running on port ${port}`));