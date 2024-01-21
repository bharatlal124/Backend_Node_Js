// Note:  Please do not change the prewritten code

// import the required module here
const mathModule = require("./math");

const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  // write your code here to Display the results of the calculations on the console.
  const sumResult = mathModule.sum(nums);
  const meanResult = mathModule.mean(nums);
  console.log(`The sum is ${sumResult}. The mean is ${meanResult}`);
};
Solution();
module.exports = Solution;
