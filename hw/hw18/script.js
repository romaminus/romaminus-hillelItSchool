'use strict';

let startTimerTime = 9;

class Timer {
    constructor(startTime) {
        this.startTime = startTime;
        this.timerRoot = document.querySelector('.timer');
        this.timerId = null;
    };

    renderTimer(minutes, seconds){
        this.timerRoot.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    };

    updateTimer(){
        if (this.startTime > 0) {
            const minutes = Math.floor(this.startTime / 60);
            const seconds = this.startTime % 60;
            this.renderTimer(minutes, seconds);
            this.startTime--;
        }else{
            clearInterval(this.timerId);
            this.timerRoot.textContent = "Time is gone!";
        }
    };

    startTimer(){
        this.updateTimer()
        this.timerId = setInterval(this.updateTimer.bind(this), 1000);
    };
};

const timer = new Timer(startTimerTime);
timer.startTimer();