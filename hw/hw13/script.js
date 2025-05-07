'use strict';

let name = document.querySelector('#name'),
    message = document.querySelector('#message'),
    number = document.querySelector('#number'),
    email = document.querySelector('#email'),
    btn = document.querySelector('.btn'),
    regexName = /\s+/,
    regexNumber = /\+380\d*$/,
    regexEmail = /@.*?\./,
    regexMessage = /.{5,}/;



btn.addEventListener('click', function(e){
    e.preventDefault();

    regexName.test(name.value)?console.log('valid name'):console.log('invalid name');

    regexMessage.test(message.value)?console.log(message.value):console.log('Замале повідомлення');
    
    let flag = number.value==380 ? '+380' : '';
    regexNumber.test(flag)?console.log('number is ok'):console.log('number invalid');

    regexEmail.test(email.value)?console.log(`${email.value} is valid`):console.log(`${email.value} is invalid`);
});
