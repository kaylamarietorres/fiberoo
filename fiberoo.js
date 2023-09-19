function fib() {
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i < 50; i++) {
    const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextFibonacci);
  }
  return fibonacciNumbers;
}
console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, (number) => `${number}`);
}
console.log(numsToStrings(fib()));
function numEvenNums(numbers) {
  let evenCount = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenCount += 1;
    }
  }
  return evenCount;
}
console.log(numEvenNums(fib()));
