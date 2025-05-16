'use strict';

function Student(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.rating = [100, 80, 90, 95, 85, ];
    this.attendance = Array(25).fill(undefined);
    this.getStudentAge = function(){
        let curentYear = new Date().getFullYear();
        console.log(`${this.firstName}\`s age: ${curentYear - this.dateOfBirth} years`);
    };
    this.getMiddleScore = function(){
        let summ = this.rating.reduce((previousValue, currentValue)=>previousValue+currentValue);
        return summ/this.rating.length;
    };
    this.present = function(){
        let i = this.attendance.findIndex(el=>el===undefined);
        i == -1 || i > 24 ? console.error('Incorect value') : this.attendance[i] = true ;
    };
    
    this.absent = function(){
        let i = this.attendance.findIndex(el=>el===undefined);
        i == -1 || i > 24 ? console.error('Incorect value') : this.attendance[i] = false ;
    };
    this.summary = function(){
        let present = 0;
        let classes = 0;
        this.attendance.forEach(el=>{
            if (el === true) {
                present += 1;
                classes += 1;
            }else if(el === false){
                classes += 1;
            };
        });
        let middle = present/classes;
        if (this.getMiddleScore()>=90 && middle >= 0.9) {
            console.log('Ти крутий кабан!');
        }else if(this.getMiddleScore()>=90 || middle >= 0.9){
            console.log('Добре, але готуй гримні!');
        }else{
            console.log('Ти баклажан :P')
        };
    };
};

let firstStudent = new Student('Roman', 'Belov', 1994);
firstStudent.getStudentAge();
console.log(`${firstStudent.firstName}\`s middle score: ${firstStudent.getMiddleScore()}`);

for (let i = 0; i < 25; i++) {
    i % 1 == 0 ? firstStudent.present() : firstStudent.absent();
};
firstStudent.summary();
console.log('---');

let secondStudent = new Student('Valeriia', 'Hryshchuk', 2004);
secondStudent.rating.push(90);
secondStudent.getStudentAge();
console.log(`${secondStudent.firstName}\`s middle score: ${secondStudent.getMiddleScore()}`);
for (let i = 0; i < 25; i++) {
    i % 2 == 0 ? secondStudent.present() : secondStudent.absent();
};
secondStudent.summary();
console.log('---');

let thirdStudent = new Student('Valeriia', 'Chernova', 2004);
thirdStudent.rating.push(70);
thirdStudent.getStudentAge();
console.log(`${thirdStudent.firstName +' '+ thirdStudent.lastName}\`s middle score: ${thirdStudent.getMiddleScore()}`);
for (let i = 0; i < 25; i++) {
    i % 4 == 0 ? thirdStudent.present() : thirdStudent.absent();
};
thirdStudent.summary();