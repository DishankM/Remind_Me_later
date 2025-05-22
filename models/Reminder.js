const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    remindMethod : {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Reminder", reminderSchema);