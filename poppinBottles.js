const poppinBottles = (num) => {
  // drink recursion
  return drink(Math.floor(num / 2), 0, 0);
};

const drink = (bottles, empty, caps) => {
  empty += bottles;
  caps += bottles;
  let redeem = 0;
  if (empty > 1) {
    const emptyRedeem = Math.floor(empty / 2);
    redeem += emptyRedeem;
    empty -= emptyRedeem * 2;
  }
  if (caps > 3) {
    const capsRedeem = Math.floor(caps / 4);
    redeem += capsRedeem;
    caps -= capsRedeem * 4;
  }
  if (redeem) {
    return bottles + drink(redeem, empty, caps);
  } else {
    return bottles;
  }
};

module.exports = poppinBottles;
