import '../scss/main.scss';
import { menuClickHandler } from '../header/header.js';

const button = document.querySelector(".burger-btn");

let testFunc = ()=>{
    console.log('its test function');
};

testFunc();

button.addEventListener("click", menuClickHandler);