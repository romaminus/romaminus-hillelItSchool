'use strict';

//Додати туди невеликий скрипт, мета якого – 
// вивести всі відомі вам типи даних у консоль. 
// Використовуючи оператор typeof та console.log

console.log(
    typeof 'str',
    typeof 57,
    typeof true,
    typeof undefined,
    typeof null + "(null)",
    typeof {}
);

// Отримати від користувача 3 рядки та вивести їх у 
// довільному порядку однією командою (шаблонні рядки);

let firstStr = prompt('ent your name', 'Arthur'),
    secondStr = prompt('ent your second name', 'Conan'),
    thirdStr = prompt('ent your surname', 'Doyle');

console.log(`Sir ${firstStr} ${secondStr} ${thirdStr}`);
