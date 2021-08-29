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
            name: {
                type: String,
                trim: true,
                required: "Name of Workout"
            },
            duration: {
                type: Number,
                required: "Total Workout Duration"
            },
            exercises: {
                type: Number,
                required: "Exercises Performed"
            },
            weight: {
                type: Number,
                required: "Total Weight Lifted"
            },
            sets: {
                type: Number,
                required: "Total Sets Performed"
            },
            reps: {
                type: Number,
                required: "Total Reps Performed"
            },
            distance: {
                type: Number,
                required: "Total Distance Covered"
            },
        },
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;