'use strict';

//                  7.1
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function sumF() {
    let newNum = 0;
    
    function adding(num) {
        return newNum += num;
    };

    return adding;
}
let sum = sumF();
let sum2 = sumF();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27