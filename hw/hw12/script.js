'use strict';

//       hw 12.1

//На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
//при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const questionBtn = document.querySelector('.prompt__btn'),
      linkBtn = document.querySelector('.link__btn');
let answer = '';

questionBtn.addEventListener('click', function(event){
    answer = prompt('Enter Link', 'https://github.com/');
});
linkBtn.addEventListener('click', function(event){
    window.location.href = `${answer}`;    
});


//       hw 12.2

const btnContainer = document.querySelector('.container');

btnContainer.addEventListener('click', function(event){
    let target = event.target;
    alert(`Клікнуто на кнопці: ${target.innerText}`);
    
});

//       hw 12.3

//Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - 
// використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
//Покроковий план:
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const toDoListRoot = document.querySelector('.list__container'),
    list = toDoListRoot.querySelector('.list'),
    addBtn = toDoListRoot.querySelector('.add__btn'),
    addInput = toDoListRoot.querySelector('.add__input');

list.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.closest('.item')){
        event.target.closest('.item').remove();
    }
})
addBtn.addEventListener('click', function(event){
    event.preventDefault();
    list.innerHTML += `<li class="item">${addInput.value}<button> Delete </button></li>`;
})