function sum(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  const { isNaN } = Number;

  if (isNaN(a) || isNaN(b)) {
    throw new TypeError("Nan was provided");
  }

  return a + b;
}

function subt(num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  const { isNaN } = Number;

  if (isNaN(a) || isNaN(b)) {
    throw new TypeError("Nan was provided");
  }

  return a - b;
}

module.exports = { sum, subt };
