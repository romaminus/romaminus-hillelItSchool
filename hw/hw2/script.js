'use strict';
//              3.1
//Додати туди невеликий скрипт, мета якого – 
// вивести всі відомі вам типи даних у консоль. 
// Використовуючи оператор typeof та console.log

console.log(
    typeof 'str',
    typeof 57,
    typeof true,
    typeof undefined,
    typeof null + "(null)",
    typeof {},
    typeof 100n,
    typeof Symbol()
);
//              3.2
// Отримати від користувача 3 рядки та вивести їх у 
// довільному порядку однією командою (шаблонні рядки);

let firstStr = prompt('ent your name', 'Arthur'),
    secondStr = prompt('ent your second name', 'Conan'),
    thirdStr = prompt('ent your surname', 'Doyle');

console.log(`Sir ${firstStr} ${secondStr} ${thirdStr}`);

//               3.3
//Розкласти за цифрами п'ятизначне число і 
// вивести у вихідному порядку через пробіл. Приклад:
//10369
//1 0 3 6 9
let num = 10369;

function modifierNum(num) {
    let toStr = String(num);
    let str = '';
    for (let i = 0; i < toStr.length; i++) {
        str += toStr[i] + ' ';
    }
    return str;
}
console.log(modifierNum(num));
