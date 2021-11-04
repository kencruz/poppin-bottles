const poppinBottles = (num) => {
  // drink recursion
  const result = drink(Math.floor(num / 2));
  return result;
};

const drink = (
  bottles,
  state = { earned: { empty: 0, caps: 0 }, remaining: { empty: 0, caps: 0 } }
) => {
  state.remaining.empty += bottles;
  state.remaining.caps += bottles;
  let redeem = 0;
  if (state.remaining.empty > 1) {
    const emptyRedeem = Math.floor(state.remaining.empty / 2);
    redeem += emptyRedeem;
    state.remaining.empty -= emptyRedeem * 2;
    state.earned.empty += emptyRedeem;
  }
  if (state.remaining.caps > 3) {
    const capsRedeem = Math.floor(state.remaining.caps / 4);
    redeem += capsRedeem;
    state.remaining.caps -= capsRedeem * 4;
    state.earned.caps += capsRedeem;
  }
  if (redeem) {
    const drinks = drink(redeem, state);
    return { bottles: bottles + drinks.bottles, state };
  } else {
    return { bottles, state };
  }
};

module.exports = poppinBottles;
