const Reminder = require('../models/Reminder');

 exports.createReminder = async(req, res) => {
    try {
        const { message, date, time, remindMethod } = req.body;

        // Basic validation of data 
        if (!message || !date || !time || !remindMethod) {
            return res.status(400).json({ 
                success: false,
                message: "All Fields are Required",
            });
        }

        const newReminder = new Reminder({
            message,
            date,
            time,
            remindMethod
        });

        await newReminder.save(); // Save the new reminder to database

        res.status(201).json({ 
            success: true,
            message: 'Reminder saved successfully!', 
            reminder: newReminder
         });

    } catch (error) {
        console.error('Error saving reminder:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};