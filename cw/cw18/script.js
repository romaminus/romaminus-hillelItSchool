'use strict';

class Clock {
    constructor(elId) {
        this.element = document.getElementById(elId);
        this.intervalId = null;
    };

    start(){
        if (this.intervalId !== null) return;
        const updateTime = () => {
            const timeNow = new Date();
            const hours = String(timeNow.getHours()).padStart(2, '0');
            const minutes = String(timeNow.getMinutes()).padStart(2, '0');
            const seconds = String(timeNow.getSeconds()).padStart(2, '0');

            this.element.textContent = `${hours} : ${minutes} : ${seconds}`;
        };
        
        updateTime();

        this.intervalId = setInterval(updateTime, 1000);
    };

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
};

let clock = new Clock('time');
clock.start();

const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');

btnStart.addEventListener('click', clock.start.bind(clock));
btnStop.addEventListener('click', clock.stop.bind(clock));


// function getData(callback){
//     setTimeout(()=>{
//         const data = 'Data is ready';
//         callback(data)
//     }, 1000)
// };

// function proccessData(data, callback){
//     setTimeout(()=>{
//         const proccessData = `${data} proccessed`;
//         callback(proccessData);
//     }, 1000)
// };

// function updateUI(proccessData) {
//     setTimeout(()=>{
//         console.log(proccessData);
//     }, 1000)
// }
// getData(data=>{
//     proccessData(data, (proccessData)=> {
//         updateUI(proccessData)
//     })
// })

let promise = new Promise((res, rej)=>{
    console.log('Test');
    setTimeout(()=>{
        res('Done');
    }, 1000);
});
promise
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log('catch');
        console.error(err);
    })
    .finally(()=>{
        console.log('finaly end');
    });

console.log('after');