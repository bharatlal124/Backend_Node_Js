// const eventEmitter = require("Events");
import * as Events from "events";

export class UserEvents extends Events.EventEmitter {
  createPost(content) {
    console.log("post is created");
    this.emit("post created");
  }
}
