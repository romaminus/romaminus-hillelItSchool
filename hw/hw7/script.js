'use strict';

//                  7.1
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

// function sumF() {
//     let newNum = 0;
    
//     function adding(num) {
//         return newNum += num;
//     };

//     return adding;
// }
// let sum = sumF();

// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

//                  7.2
// Створити функцію для розрахунку добутку двох чисел, що викликається так: 
// name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function curry(f) {
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

function summ(a, b) {
    return a * b;
  }
let curriedSum = curry(summ);

alert( curriedSum(5)(2) );


//                  7.3
