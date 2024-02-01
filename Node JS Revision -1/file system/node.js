const fs = require("fs");

// console.log("Sorting to read");

// const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
// console.log(buffer);
// console.log(buffer);
try {
  fs.appendFileSync("data.txt", "Name : sunny, Age : 50, position: xyz");
} catch (err) {
  console.log(err);
}

try {
  fs.unlinkSync("data.txt");
} catch (err) {
  console.log(err);
}
