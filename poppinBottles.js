const poppinBottles = (num) => {
  // drink recursion
  const result = drink(Math.floor(num / 2), 0, 0);
  return result;
};

const drink = (bottles, empty, caps, state = { earned: {}, remaining: {} }) => {
  empty += bottles;
  caps += bottles;
  let redeem = 0;
  if (empty > 1) {
    const emptyRedeem = Math.floor(empty / 2);
    redeem += emptyRedeem;
    empty -= emptyRedeem * 2;
    if (state.earned["bottles"]) {
      state.earned["bottles"] += emptyRedeem;
    } else {
      state.earned["bottles"] = emptyRedeem;
    }
  }
  if (caps > 3) {
    const capsRedeem = Math.floor(caps / 4);
    redeem += capsRedeem;
    caps -= capsRedeem * 4;
    if (state.earned["caps"]) {
      state.earned["caps"] += capsRedeem;
    } else {
      state.earned["caps"] = capsRedeem;
    }
  }
  if (redeem) {
    const drinks = drink(redeem, empty, caps, state);
    return { bottles: bottles + drinks.bottles, state };
  } else {
    state.remaining = { caps, empty };
    return { bottles, state };
  }
};

module.exports = poppinBottles;
