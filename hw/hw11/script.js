'use strict';

//        hw 11.1

//Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

let table = document.createElement('table'),
    size = 10;

table.border = 1;
table.cellpadding = 2;
table.cellspacing = 0;
table.width = "99%";
document.body.append(table);


for (let i = 1; i <= size; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 1; j <= size; j++) {
        let td = document.createElement('td');
        td.innerText = `${i*j}`
        tr.append(td)
    }
}