'use strict';

//        hw 11.1

//Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

let table = document.createElement('table'),
    size = 10;

table.border = 1;
table.cellpadding = 2;
table.cellspacing = 0;
table.width = "99%";
document.body.append(table);


for (let i = 1; i <= size; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 1; j <= size; j++) {
        let td = document.createElement('td');
        td.innerText = `${i*j}`
        tr.append(td)
    }
};

//        hw 11.2

//Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. 
//При повторному натисканні – повертається попередній колір

let text = document.querySelector('.text'),
    changeColorBtn = document.querySelector('.change__btn');

changeColorBtn.addEventListener('click', function () {
    text.classList.toggle('changed');
});

//        hw 11.3

//Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
//Вивести зображення, отримане випадковим чином (Math.random)

let changeNumberBtn = document.querySelector('.change__number__btn'),
    images = document.querySelectorAll('.img'),
    lastIndex = 0;

changeNumberBtn.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random() * 9);
    images[lastIndex].classList.remove('active');
    images[randomNum].classList.add('active');
    lastIndex = randomNum;
})

