const poppinBottles = (num) => {
  // drink recursion
  const result = drink(Math.floor(num / 2), 0, 0);
  return result;
};

const drink = (bottles, empty, caps, earned = {}) => {
  empty += bottles;
  caps += bottles;
  let redeem = 0;
  if (empty > 1) {
    const emptyRedeem = Math.floor(empty / 2);
    redeem += emptyRedeem;
    empty -= emptyRedeem * 2;
    if (earned["bottles"]) {
      earned["bottles"] += emptyRedeem;
    } else {
      earned["bottles"] = emptyRedeem;
    }
  }
  if (caps > 3) {
    const capsRedeem = Math.floor(caps / 4);
    redeem += capsRedeem;
    caps -= capsRedeem * 4;
    if (earned["caps"]) {
      earned["caps"] += capsRedeem;
    } else {
      earned["caps"] = capsRedeem;
    }
  }
  if (redeem) {
    const drinks = drink(redeem, empty, caps, earned);
    return { bottles: bottles + drinks.bottles, earned };
  } else {
    return { bottles, earned };
  }
};

module.exports = poppinBottles;
