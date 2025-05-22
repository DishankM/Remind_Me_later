require('dotenv').config();
const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB connection Error");
        process.exit(1);
    });
}

module.exports = connectDB;