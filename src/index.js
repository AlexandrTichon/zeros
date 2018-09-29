module.exports = function getZerosCount(number) {
  var zero_number = 0,
      slag = 0,
      denominator = 5,
      power = 1;
  while (true) {
      denominator = Math.pow(5, power);
      slag = Math.floor(number / denominator); 
      if (slag < 1) break;
      else zero_number += slag;
      power++;
  }
  return zero_number;
}
