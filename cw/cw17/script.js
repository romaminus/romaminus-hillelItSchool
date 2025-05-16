'use strict';

class UserClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    sayHello(){
        console.log(`Hello ${this.name}`);
    };
    getName(){
        return this.name;
    };
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length <= 2) {
            console.log('too short');
        }else{
            this._name = value;
        }
    }
};

let userClass = new UserClass('Roman', 31);
userClass.sayHello();
console.log(userClass.getName());
console.log(userClass);
userClass.name = 'Valeriia';
userClass.sayHello();


class AdminClass extends UserClass{
    constructor(name, age, role){
        super(name, age)
        this.role = role;
    };
    sayHi(){
        console.log(`Hi ${this.name}`);
    };
};
let adminClass = new AdminClass('Roman', 31, 'programist');
adminClass.sayHi();
console.log(adminClass);