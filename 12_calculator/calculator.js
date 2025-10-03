const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (array.length == 0) {
    return 0
  } else {
	return array.reduce((total, num) => total += num)
  }
};

const multiply = function(array) {
  return array.reduce((total, num) => total *= num)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
  let tempArray = []
  if (number <= 1) {
    return 1
  } else {
	  for (let i = number; i > 1; i--) {
      tempArray.push(i)
    }
}
  return tempArray.reduce((total, num) => total *= num)
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
