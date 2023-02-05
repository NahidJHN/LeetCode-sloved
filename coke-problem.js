// supppose you purchase 10 coke, the shopkeeper offer you, if you return cap you will get 1 coke for free, so you have a 10 coke, then how many coke you can get after returning all the cap, remember it is continues process,

/**
 * @desc Find the number of existing coke and cap
 * @param {number} numberOfCoke
 * @returns {object}
 */

const findTotalCode = (numberOfCoke) => {
  let cap = numberOfCoke;
  let totalCoke = numberOfCoke;
  while (cap >= 3) {
    totalCoke++;
    cap -= 2;
  }
  return { totalCoke, cap };
};
