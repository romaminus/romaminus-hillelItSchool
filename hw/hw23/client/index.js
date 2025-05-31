'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const toDoValueForm = document.querySelector('.js--form__input');
    const toDosWrapperRoot = document.querySelector('.js--todos-wrapper');
    let toDoList = ()=>{
        return fetch('http://localhost:5000/todos').then((res)=>res.json());
    };
    function fetchRequest(link, method, body) {
        if (method!=='DELETE') {
            return fetch(link, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
        }
        
        if (method === "DELETE") {
            return fetch(link, {
                    method: method,
                }
            )
        }
    }
    function renderToDoItem(item) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'todo-item', 'd-flex', 'align-items-center', 'mb-2');
        li.dataset.id = item.id;  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked;
        checkbox.classList.add('form-check-input', 'me-2');   
        const span = document.createElement('span');
        span.classList.add('todo-item__description', 'flex-grow-1');
        span.textContent = item.value;    
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'todo-item__delete');
        deleteBtn.textContent = 'Видалити';   
        if (item.checked) {
            li.classList.add('todo-item--checked');
        } 
        li.append(checkbox, span, deleteBtn);
        toDosWrapperRoot.append(li);
    }
    toDoList().then(data=>{
        data.forEach(item=>{
            renderToDoItem(item)
        })
    })
    document.querySelector('.js--form').addEventListener('submit', e => {
        e.preventDefault();
        const toDoValue = toDoValueForm.value.trim(); 
        if (toDoValue === '') {
            alert('Будь ласка, введіть завдання.');
            return;
        } 
        const newId = toDoList().then(data=>data.length) > 0 ? Math.max(...toDoList().then(data=>data.map(item => item.id))) + 1 : 0;
        
        const newItem = {
            id: newId,
            value: toDoValue,
            checked: false
        };
        fetchRequest('http://localhost:5000/todos', 'POST', newItem)
        renderToDoItem(newItem);
        toDoValueForm.value = '';
    }); 
    toDosWrapperRoot.addEventListener('change', async e => {
        if (e.target.matches('input[type="checkbox"]')) {
            const li = e.target.closest('.todo-item');
            const itemId = parseInt(li.dataset.id);
            let itemIndex = await toDoList();
            itemIndex = itemIndex.findIndex(item => item.id === itemId);

            if (itemIndex !== -1) {
                toDoList().then(data=>{
                    data[itemIndex].checked = e.target.checked;
                    fetchRequest(`http://localhost:5000/todos/${itemIndex}`, 'PUT', data[itemIndex])
                })
            }
            li.classList.toggle('todo-item--checked', e.target.checked);
        }
    }); 
    toDosWrapperRoot.addEventListener('click', e => {
        if (e.target.matches('.todo-item__delete')) {
            const li = e.target.closest('.todo-item');
            const itemId = parseInt(li.dataset.id);
            fetchRequest(`http://localhost:5000/todos/${itemId}`, 'DELETE',)
            li.remove();
        } 
        if (e.target.matches('.todo-item__description')) {
            const taskText = e.target.textContent;
            document.querySelector('#taskModalLabel').textContent = 'Ваше завдання';
            document.querySelector('#taskModalBody').textContent = taskText;  
            const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
            taskModal.show();
        }
    });
});