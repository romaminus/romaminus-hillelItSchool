'use strict';

//                        6.1

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteLetter(words, deleteList) {
    let str = '';
    for (let i = 0; i < deleteList.length; i++) {
        if (!str) {
            str = words.replaceAll(deleteList[i], '');
        }else{
            str = str.replaceAll(deleteList[i], '');
        };
    }
    return str;
}
console.log(deleteLetter('hello world', ['h', 'o']));

