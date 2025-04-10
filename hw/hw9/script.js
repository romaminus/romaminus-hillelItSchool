'use strict';

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
