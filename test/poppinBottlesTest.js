const poppinBottles = require("../poppinBottles");
const assert = require("chai").assert;

describe("#poppinBottles", () => {
  it("should return 15 from 10", () => {
    assert.strictEqual(poppinBottles(10), 15);
  });
  it("should return 35 from 20", () => {
    assert.strictEqual(poppinBottles(10), 15);
  });
  it("should return 55 from 30", () => {
    assert.strictEqual(poppinBottles(10), 15);
  });
  it("should return 75 from 40", () => {
    assert.strictEqual(poppinBottles(10), 15);
  });
});
