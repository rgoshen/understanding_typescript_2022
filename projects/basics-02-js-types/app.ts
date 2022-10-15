const add = (n1: number, n2: number) => {
  // console.log('n1:', typeof n1);
  // console.log('n2:', typeof n2);

  // JavaScript way
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }

  return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
