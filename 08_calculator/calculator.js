const add = function(n1, n2) {
	return n2 + n1;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((sumTillNow, val) => {
    return sumTillNow + val;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((sumTillNow, val) => {
    return sumTillNow * val;
  }, 1)
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }

  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
