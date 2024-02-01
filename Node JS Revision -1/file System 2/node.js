const { log } = require("console");
const fs = require("fs");

fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("data.txt", "New employe : hapy", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is written");
  }
});

fs.appendFile("data.txt", "/n Anoither employe", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is updated");
  }
});

fs.unlink("data.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is deleted");
  }
});
