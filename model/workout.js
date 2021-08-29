const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    }
    cardio: {
        type: String,
        trim: true,
        required: "Enter cardio exercise"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
});

const workoutSchema = mongoose.model("workout", workoutSchema);

module.exports = workoutSchema;