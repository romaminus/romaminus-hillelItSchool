'use strict';

let myFetch = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log(myFetch);
// myFetch
//     .then(responce=>responce.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.error(err));

async function fetchData(url) {
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(responce, data);
};

fetchData('https://jsonplaceholder.typicode.com/posts');

