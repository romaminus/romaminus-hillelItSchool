'use strict';

//           4.1
//За допомогою prompt запитати “ім'я користувача”.
//За допомогою alert вивести "Hello, John! How are you?" , 
// де “John” це те, що ввів користувач
let userName = prompt('ent your name:', 'John');
alert(`Hello, ${userName}! How are you?`);

//           4.2
//Дано тризначне число, яке надае користувач, потрибно визначити:
//Чи правда, що всі цифри однакові?
//Чи є серед цифр цифри однакові?

let userNum = prompt('ent 3 num:', '123')
function validateNum(value) {
    let match = (+value[0])===(+value[1])&&(+value[1])===(+value[2])
    let sameValue = `All values are the same: ${match}\n`;
    if(match){
        return sameValue += 'All values are the same';
    }else if (+value[0] == +value[1]) {
        sameValue += '1st & 2nd values are the same';
    }else if(+value[0] == +value[2]){
        sameValue += '1st & 3rd values are the same';
    }else if(+value[1] == +value[2]){
        sameValue += '2nd & 3rd values are the same';
    }else{
        sameValue += 'No identical values';
    }
    return sameValue;
}
console.log(validateNum(userNum));

//           4.3
//запитати у користувача рік народження;
//запитати в нього, в якому місті він живе;
//запитати його улюблений вид спорту.
//Показати його вік;
//якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..."
// і на місце точок підставляємо країну, столицею якої є місто.
// Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

let userAge = prompt('ent your age:', '18'),
    userCity = prompt('ent your city', 'Київ'),
    userFavoriteSport = prompt('ent your favorite sport', 'Бокс');

function userInfo(age, city, sport) {
    let capital = '',
        wish = '';
    switch(city) {
        case 'Київ':
            capital = 'Ти живеш у столиці України'
            break;
    
        case 'Вашингтон':
            capital = 'Ти живеш у столиці Омерики'
            break;
    
        case 'Лондон':
            capital = 'Ти живеш у столиці Англії'
            break;
        
        default:
            capital = `Tи живеш у місті ${city}`
            break;
    }
    switch (sport) {
        case 'Бокс':
            wish = 'Круто! Хочеш стати Усиком?'
            break;
        case 'Футбол':
            wish = 'Круто! Хочеш стати Ліонелем?'
            break;
        case 'Баскетбол':
            wish = 'Круто! Хочеш стати Леброном?'
            break;
        default:
            break;
    }

    return `${age?'Твій вік: ' + age:'Шкода, що Ви не захотіли ввести свій вік'}\n
            ${city?capital:'Шкода, що Ви не захотіли ввести своє місто'}\n
            ${sport?wish:'Шкода, що Ви не захотіли ввести свій вид спорту'}`
}
alert(userInfo(userAge, userCity, userFavoriteSport));


//           4.4

let numOrStr = prompt('input number or string');
console.log(typeof numOrStr)

if(numOrStr === null) {
	console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
	console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
	console.log(' number is Ba_NaN')
} else {
	console.log('OK!')
};

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case !isNaN(numOrStr) || numOrStr:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}