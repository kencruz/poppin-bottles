const args = process.argv.slice(2);
const poppinBottles = require("./poppinBottles");

const result = poppinBottles(Number(args[0]));
console.log(
  `TOTAL BOTTLES: ${result.bottles}
  TOTAL EARNED:
    BOTTLES: ${result.earned.bottles}
    CAPS: ${result.earned.caps}`
);
