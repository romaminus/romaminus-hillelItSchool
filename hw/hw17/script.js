'use strict';
// --------------------------17.1
// Створіть клас Calculator, який буде мати методи для виконання 
// базових математичних операцій: додавання, віднімання, множення та ділення.

class Calculator {
    constructor(){};

    add(firstNumber, secondNumber){
        return firstNumber+secondNumber;
    };
    subtract(firstNumber, secondNumber){
        return firstNumber-secondNumber; 
    };
    multiply(firstNumber, secondNumber){
        return firstNumber*secondNumber;
    };
    divide(firstNumber, secondNumber){
        return firstNumber/secondNumber;
    };
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4

// --------------------------17.2
// Створіть клас Coach, який буде представляти тренера. 
// Додайте властивості, такі як ім'я, спеціалізація та рейтинг. 
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    };
    displayInfo(){
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

// --------------------------17.3

// Створіть клас BankAccount, який буде представляти банківський рахунок. 
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
    constructor(startBalance) {
        this.balance = startBalance;
    };
    getBalance(){
        return this.balance;
    };
    deposit(money){
        this.balance += money;
    };
    withdraw(money){
        this.balance -= money;
    };
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300