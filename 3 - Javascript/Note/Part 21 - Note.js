/* 
! Function
*/

/* 
! Normal function (with and without return)
*/
function helloWorld() {
  console.log('Hello');
}
helloWorld();

function hello(a, b) {
  console.log([...arguments]);
}
hello('nirand', 'pooh');

/* 
! Arrow function
*/

const a = () => console.log('Hello');
a();

//const sumNum = (b, c) => b + c;
const sumNum = (b, c) => {
  return b + c;
};
console.log(sumNum(1, 2));

/* 
! Higher order function
*/

const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`);
};
printMsg(isEven, 4);

/* 
! Array method
*/
/* 
!!  ForEach
*/
const numbers = [28, 77, 45, 99, 27];
numbers.forEach((number) => {
  console.log(number);
});

/* 
! Map
*/
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
const announcements = finalParticipants.map((member) => {
  return member + ' joined the contest.';
});
console.log(announcements);

/* 
! Filter
*/
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});

/* 
! Reduce
*/
const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum); // 10
