'use strict';

//     Варіант 1 (згідно з уроком)
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    },
    {
        name: 'Alice',
        salary: 600
    }],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ],
    }
};


function getSalary(obj) {
    let salaryArr = [];
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(el=>{
                salaryArr.push(el.salary);
            })
        }else{
            salaryArr = salaryArr.concat(getSalary(obj[key]));
        }
    };
    return salaryArr;
};

console.log(getSalary(company).reduce((accumulator, currentValue) => accumulator + currentValue));

//   Варінт 2. Питання: чи рахується це рішення рекурсивним викликом?

function calcSalary(object) {
    let salaryArr = [];

    function getSalary(obj) {
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach(el=>{
                    salaryArr.push(el.salary);
                })
            }else{
                getSalary(obj[key])
            }
        };
    };

    getSalary(object);
    
    return salaryArr.reduce((accumulator, currentValue) => accumulator + currentValue);
}


console.log(calcSalary(company));


