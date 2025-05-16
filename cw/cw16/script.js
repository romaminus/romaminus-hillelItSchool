'use strict';

function Human(name, age) {
    let _name = name;
    let _age = age;
    // this.name = name;
    // this.age = age;
    this.getName = function(){
        console.log(_name);
    };
    this.getAge = function(){
        console.log(_age);
    };
    this.getInfo = function(){
        console.log(`Human ${_name} has ${_age} years`);
    };
};

let human1 = new Human('Roman', 31);
let human2 = new Human('Valeriia', 20);

human1.getInfo();
human2.getInfo();

function User(name) {
    this.name = name;
};

User.prototype.getName = function(){
    console.log(this.name);
};

function Admin(name, salary){
    User.call(this, name)
    this.salary = salary;
}
function Student(name, age) {
    
}

let user1 = new User('User 1');
user1.getName = function(){
    console.log(this.name + 'some text');
}
let user2 = new User('User 2');
let user3 = new User('User 3');