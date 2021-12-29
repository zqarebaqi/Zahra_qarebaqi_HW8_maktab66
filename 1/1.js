//If the function has only one statement, and the statement returns a value, we can remove the brackets and the return keyword:like:

let splitBill = (amount, numPeople) =>
  `Each person needs to pay ${amount / numPeople}`;

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));

//////////secound part

const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;

  const decrease = () => (countFromNum -= step);

  return decrease;
};
const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
