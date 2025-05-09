'use strict';

let btnPrev = document.querySelector('.prev'),
    btnNext = document.querySelector('.next'),
    sliderItems = Array.from(document.querySelectorAll('.slider_item')),
    activeIndex = sliderItems.findIndex(el=>/active/.test(el.classList)),
    dotRoot = document.querySelector('.nav_point');

sliderItems.forEach(el=>{
    let dotItem = document.createElement('button');
    dotItem.dataset.index = el.dataset.index;
    dotItem.classList.add('dot');
    if(/active/.test(el.classList)) dotItem.classList.add('active_dot');
    dotRoot.append(dotItem);
});

let dotItems = Array.from(dotRoot.querySelectorAll('.dot'));

btnPrev.addEventListener('click', function (event) {
    event.preventDefault();

    if (activeIndex > 0) {
        sliderItems.find(el=>/active/.test(el.classList)).classList.remove('active');
        sliderItems[activeIndex-1].classList.add('active');
        dotItems.find(el=>/active_dot/.test(el.classList)).classList.remove('active_dot');
        dotItems[activeIndex-1].classList.add('active_dot');
        activeIndex -= 1;
    }else{
        activeIndex = 0;
    }
});

btnNext.addEventListener('click', function (event) {
    event.preventDefault();

    if (activeIndex < sliderItems.length-1) {
        sliderItems.find(el=>/active/.test(el.classList)).classList.remove('active');
        sliderItems[+activeIndex+1].classList.add('active');
        dotItems.find(el=>/active_dot/.test(el.classList)).classList.remove('active_dot');
        dotItems[+activeIndex+1].classList.add('active_dot');
        activeIndex += 1;
    }else{
        activeIndex = sliderItems.length - 1;
    }
});

dotRoot.addEventListener('click', function(event){
    event.preventDefault();

    if(/dot/.test(event.target.classList)){
        sliderItems.find(el=>/active/.test(el.classList)).classList.remove('active');
        sliderItems[event.target.dataset.index].classList.add('active');
        dotItems.find(el=>/active_dot/.test(el.classList)).classList.remove('active_dot');
        dotItems[event.target.dataset.index].classList.add('active_dot');
        activeIndex = event.target.dataset.index;
        
    }
    
})