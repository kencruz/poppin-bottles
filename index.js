const args = process.argv.slice(2);
const poppinBottles = require("./poppinBottles");

const result = poppinBottles(Number(args[0]));
console.log(
  `TOTAL BOTTLES: ${result.bottles}
REMAINING BOTTLES: ${result.state.remaining.empty}
REMAINING CAPS: ${result.state.remaining.caps}
TOTAL EARNED:
  BOTTLES: ${result.state.earned.bottles}
  CAPS: ${result.state.earned.caps}`
);
