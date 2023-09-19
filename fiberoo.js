function fib() {
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i < 50; i++) {
    const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextFibonacci);
  }
  return fibonacciNumbers;
}
console.log(fib());

const _ = require('underscore');
function numsToStrings(numbers) {
  return _.map(numbers, (number) => `${number}`);
}
console.log(numsToStrings(fib()));
