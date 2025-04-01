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

// function curry(f) {
//     return function(a) {
//         // var1 = a
//       return function(b) {
//         // var2 = b
//         return f(a, b);
//       };
//     };
//   }

// function summ(a, b) {
//     return a * b;
//   }
// let curriedSum = curry(summ);

// alert( curriedSum(5)(2) );


//                  7.3
//Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, 
// текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

let userUnswer = prompt('Введіть число > 100:', '100');

function checkValue(value) {
    if (typeof value === 'number') {
        if (value > 100) {
            return true;
        } else if(isNaN(value)){
            return true;
        } else{
            return false;
        }
    } else {
        return false;
    }
};

function checkNumber(param) {
    for (let i = 0; i <= 9; i++) {
        if (checkValue(+param)) {
            console.log(param);
            break;
        }else if(i == 9){
            console.log(param);
        }else{
            alert('Будь ласка, введіть Ваше число заново!');
            param = prompt('Введіть число > 100:', '100');
        }
    };
};
checkNumber(userUnswer);