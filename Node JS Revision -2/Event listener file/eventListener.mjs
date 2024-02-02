import { UserEvents } from "./userevent.mjs";

const userEvents = new UserEvents();

// userEvents.createPost("this is my post");

// userEvents.addListener("post created");

function savetoDatabase() {
  console.log("save to ddata base");
}

function sendNotification() {
  console.log("notification send");
}

function updateTimeline() {
  console.log("update timeline");
}

userEvents.addListener("post created", savetoDatabase);
userEvents.addListener("post created", sendNotification);
userEvents.addListener("post created", updateTimeline);

userEvents.createPost("this is my first post");
