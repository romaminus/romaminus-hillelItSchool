'use strict';
//                 5.1
//Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)
let numWithRange = '';
for (let i = 20; i <= 30; i += 0.5) {
    numWithRange += i + ' ';
}
console.log(numWithRange);

//                 5.2
//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

for (let i = 10; i <= 100; i+=10) {
    console.log(`${i}$ = ${i *26} гривень`);
}

//                 5.3
//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// let numN = prompt('ent your numb:', 17);

// for (let i = 1; i < 100; i++) {
//     if (i*i <= numN) {
//         console.log(i);        
//     }
// }

//                 5.4
//Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто 
// воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let number = prompt('ent numb', 51);

function integerCheck(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if(num % i === 0){
      return false;
    }
    return num > 1;
  }
};

if (integerCheck(+number)) {
  alert('is integer!');
}else{
  alert('not an integer');
}
