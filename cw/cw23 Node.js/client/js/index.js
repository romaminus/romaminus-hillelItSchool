console.log('Client JS');

const btn = document.querySelector('.btn');
const getBtn = document.querySelector('.get-btn')
const updateBtn = document.querySelector('.upd-btn')
btn.addEventListener('click', e=>{
    fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userId": 10,
            "id": 10,
            "title": "  qwertyuiop",
            "completed": true
        })
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data));
});
getBtn.addEventListener('click', e=>{
    fetch('http://localhost:5000/todos')
        .then((res)=>res.json())
        .then((data)=>console.log(data));

});
updateBtn.addEventListener('click', e=>{
    fetch('http://localhost:5000/todos/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userId": 99,
            "id": 99,
            "title": "GREAT",
            "completed": true
        })
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data));
})



