import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;

    if (this.progress >= this.goal) {
      this.emit("goalReached");

      // this.progress = 0;
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  // const congratulatoryMessageListener = () => {
  //   console.log("Congratulations! You have reached your daily fitness goal.");
  // };

  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal");
  });
  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
