const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("enter first no.", (num1) => {
  interface.question("enter second no.", (num2) => {
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});
