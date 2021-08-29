const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type of Workout"
    },
    date: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        trim: true,
        required: "Total Workout Duration"
    },
    numExercises: {
        type: Number,
        trim: true,
        required: "Exercises Performed"
    },
    totalWeight: {
        type: Number,
        trim: true,
        required: "Total Weight Lifted"
    },
    totalSets: {
        type: Number,
        required: "Total Sets Performed"
    },
    totalReps: {
        type: Number,
        required: "Total Reps Performed"
    },
    totalDistance: {
        type: Number,
        required: "Total Distance Covered"
    },
});

const workoutSchema = mongoose.model("workout", workoutSchema);

module.exports = workoutSchema;