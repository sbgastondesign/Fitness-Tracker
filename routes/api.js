const router = require("express").Router();
const trackWorkout = require("../models/workout.js");

router.post("/api/trackWorkout", ({ body }, res) => {
  trackWorkout.create(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/trackWorkout/bulk", ({ body }, res) => {
  trackWorkout.insertMany(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/trackWorkout", (req, res) => {
  trackWorkout.find({})
    .sort({ date: -1 })
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
