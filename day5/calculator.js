class Calculator {
  add(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  sub(...numbers) {
    return numbers.length === 0
      ? 0
      : numbers.reduce((acc, curr, index) => (index === 0 ? acc : acc - curr));
  }
  mul(...numbers) {
    return numbers.length === 0
      ? 0
      : numbers.reduce((acc, curr) => acc * curr, 1);
  }
  div(...numbers) {
    {
      return numbers.length === 0
        ? 0
        : numbers.length === 1
        ? numbers[0]
        : numbers.reduce((acc, curr, index) =>
            index === 0 ? acc : curr === 0 ? "can't divide by 0" : acc / curr
          );
    }
  }
}

const cal = new Calculator();
// console.log(cal.add(1,2,3,4));
// console.log(cal.sub(10, 5, 2, 5));

// console.log(cal.mul(2, 3, 5, 3, 2));
// console.log(cal.div(20, 2, 2));
