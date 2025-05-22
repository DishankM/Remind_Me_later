const express = require("express");
const app = express();
require('dotenv').config();

const cors = require('express');
const connectDB = require('./config/db');
const reminderRoutes = require('./routes/reminderRoutes');

const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/reminders', reminderRoutes);

app.get('/', (req, res) => {
    return res.json({
        sucess: true,
        message: "Your Server in running!"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});