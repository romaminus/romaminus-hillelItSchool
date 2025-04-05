'use strict';

//             8.1

//Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
//Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep(); // 1
// Такий підхід широко використовується в бібліотеках JavaScript.

// let ladder = {
//     up: function () { // підніматиме вас на одну сходинку
//     },
//     down: function () { // опускатиме вас на одну сходинку
//     },
//     showStep: function () { // показує поточну сходинку
//     }
//   };

function Ladder () {
    this.stepCounter = 0;
    this.stepUp = 0;
    this.stepDown = 0;
    this.up = function () {
        this.stepCounter++;
        this.stepUp++;
        console.log(`Ви зробили крок вверх`);
        return this;
    };
    this.down = function () {
        if (this.stepCounter > 0) {
            this.stepCounter--;
            this.stepDown++;
            console.log(`Ви зробили крок вниз`);
            return this;
        }else{
            console.log(`Ви перед сходами)`);
            return this;
        }
    };
    this.showStep = function () {
        if (this.stepCounter > 0) {
            console.log(`Ви зробили кроків вгору: ${this.stepUp} та кроків до низу:  ${this.stepDown} і знаходитесь на ${this.stepCounter} сходинці`);
            return this;
        }else{
            console.log(`Ви перед сходами)`);
            return this;
        }
    }
};
let ladder = new Ladder();

ladder.showStep();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.down();
// ladder.showStep();
ladder.up().up().up().down().showStep();
