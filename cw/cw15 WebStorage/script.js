'use strict';
let formContainerEl = document.getElementById('formContainer');
let users = JSON.parse(localStorage.getItem('users')) || [];
let editUserId = null;

function handleAddUser() {
    console.log('handleAddUser');
    
    showForm('RL', 9407, 69, 'add');
};

function showForm(name,phone,age,mode) {
    const formHTML = `
        <input type="text" class="form-control" id="nameInput" placeholder="name" value="${name}">
        <input type="text" class="form-control" id="phoneInput" placeholder="phone" value="${phone}">
        <input type="text" class="form-control" id="ageInput" placeholder="age" value="${age}">
        <button class="btn btn-primary" onclick="submitForm()">${mode === 'add' ? 'Add' : 'Edit'}</button>
    `;

    formContainerEl.innerHTML = formHTML;
}

function submitForm() {
    console.log('submitForm');
    let name  = document.getElementById('nameInput').value;
    let phone  = document.getElementById('phoneInput').value;
    let age  = document.getElementById('ageInput').value;

    if(editUserId){
        //edit user
    }else{
        //add
        const id = users.length ? users[users.length - 1].id+1 : 1;
        users.push({id, name, phone, age});
    }

    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector('#userTable tbody');

    tbody.innerHTML = '';
    users.forEach((user) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.age}</td>
            <td>
                <button class="btn btn-primary" onclick="">View</button>
                <button class="btn btn-primary" onclick="">Edit</button>
                <button class="btn btn-primary" onclick="">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// localStorage.clear();