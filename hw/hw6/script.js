'use strict';

//                        6.1

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// function deleteLetter(words, deleteList) {
//     let str = '';
//     for (let i = 0; i < deleteList.length; i++) {
//         if (!str) {
//             str = words.replaceAll(deleteList[i], '');
//         }else{
//             str = str.replaceAll(deleteList[i], '');
//         };
//     }
//     return str;
// }
// console.log(deleteLetter('hello world', ['h', 'o']));

//                        6.1

//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє 
// арифметичне лише числових елементів даного масиву.

function middleNumber(arr) {
    let num = arr.filter(el=>typeof el === 'number');
    let middle = 0;
    num.forEach(element => {
        middle += element;
    });
    return middle / num.length;
}

console.log(middleNumber([1, 5, 4, 'gjk', true, null, 6,]));
