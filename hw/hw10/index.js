'use strict';

//                          10.1

//Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, 
//місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

let obj = {
    name: 'John',
    age: 27,
    city: 'Kyiv',

    getInfo(){
        return `Привіт, мене звати ${this.name}, мені ${this.age}, я проживаю в місті: ${this.city}`;
    }
};

console.log(obj.getInfo());

//                          10.2

//Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення 
//нового масиву, в якому лише парні числа з оригінального масиву.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumArr = numArr.filter(num => num % 2 === 0);
console.log(newNumArr);

//                          10.3

//Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
//Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, 
//номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям 
//та метод для додавання нових контактів.

const user = {
    name: 'John',
    age: 27,
    city: 'Kyiv',
    contacts: [
        {
            name: 'Peter',
            number: 67238,
            email: 'alex@gmail.com',
        },
        {
            name: 'Alex',
            number: 95037,
            email: 'alex@gmail.com',
        },
        {
            name: 'Jane',
            number: 73969,
            email: 'jane@gmail.com',
        }
    ],
    findWithName(name){
        return this.contacts.find(el => el.name === name)
    },
    addNewContact(name, number, email){
        this.contacts.push({
            name,
            number,
            email,
        })
    }
};
console.log(user.findWithName('Alex'));
user.addNewContact('Roman', 73072, 'roman@gmail.com')
console.log(user.contacts);
