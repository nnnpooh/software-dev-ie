/* 
! Function
*/

// function hello(name, age) {
//   console.log('Hello World! ' + name);
//   console.log('You are ' + age + ' years old.');
// }

// hello('Tom',19);
// var c = hello('Tom', 9)
// console.log(c);

// function sumNumber(a, b) {
//   return a + b;
// }

//var c = sumNumber(1,2)
//console.log(sumNumber(1,2))

/* 
! Arrow Function
*/

// function hello(name, age) {
//   console.log('Hello World! ' + name);
//   console.log('You are ' + age + ' years old.');
// }

// var hello2 = (name, age) => {
//   console.log('Hello World! ' + name);
//   console.log('You are ' + age + ' years old.');
// };

// hello('tom', 9);
// hello2('tom', 9);

// function sumNumber(a, b) {
//   return a + b;
// }

// var sumNumber2 = (a, b) => a + b;
// var sumNumber3 = (a, b) => {
//   return a + b;
// };

// console.log(sumNumber(1, 2));
// console.log(sumNumber2(1, 2));

/* 
! Higher Order Function
*/

// function isEven(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var isEven = (n) => {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var isEven = (n) => n % 2 == 0;
// //console.log(isEven(8));

// var printMsg = (evenFunc, num) => {
//   var isNumEven = evenFunc(num);
//   console.log('Is this number even?: ' + isNumEven);
// };

// printMsg(isEven, 2);

/* 
! Array Method
*/

var numbers = [28, 77, 45, 99, 27];
var numbers2 = [
  [28, 77],
  [45, 99],
  [27, 30],
];

//console.log(numbers.length)

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//console.log(numbers.slice(0,3))

// numbers.slice(0, 3).forEach((item) => {
//   console.log(item);
// });

//console.log(numbers2);

// numbers2.forEach((item) => {
//   item.forEach((item2) => console.log(item2));
// });

/* 
! Map
*/
// var names = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// var nameModified = names.map((name) => 'This is ' + name + '.');

// console.log(nameModified)

/* 
! Filter
*/
var numbers = [4, 11, 42, 14, 39];

var numberFilter = numbers.filter((item) => item > 12);

console.log(numberFilter);
