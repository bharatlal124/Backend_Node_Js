const fs = require("fs");

const Path = require("path");

const filePath = Path.join("src", "home", "data.txt");
console.log(filePath);

const filePathResolved = Path.resolve("src", "home", "data.txt");

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log(Path.extname(filePathResolved));
console.log(filePathResolved);
