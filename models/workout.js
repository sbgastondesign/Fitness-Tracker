const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of Workout"
            },
            exerciseName: {
                type: String,
                trim: true,
                required: "Name of Workout"
            },
            totalDuration: {
                type: Number,
                required: "Total Workout Duration"
            },
            numExercises: {
                type: Number,
                required: "Exercises Performed"
            },
            totalWeight: {
                type: Number,
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
        },
    ]
});

const workoutSchema = mongoose.model("workout", workoutSchema);

module.exports = workoutSchema;