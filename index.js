const args = process.argv.slice(2);
const poppinBottles = require("./poppinBottles");

console.log(
  `With $${args[0]} you will receive ${poppinBottles(Number(args[0]))} bottles.`
);
