'use strict';

let addBtn = document.querySelector('.form__btn'),
    toDoValueForm = document.querySelector('.form__input'),
    toDosWrapperRoot = document.querySelector('.js--todos-wrapper'),
    toDosStorageList = JSON.parse(localStorage.getItem('list')) || [];

toDosStorageList.forEach(element => {
    new ToDoItem(element.value, element.checked, element.id).render();
});


function ToDoItem(value, ckecked = false, index = false) {
    this.toDoValue = value;
    this.toDoItemCkecked = ckecked;
    this.toDoItem = document.createElement('li');
    this.toDoItemBtn = document.createElement('button');
    this.toDoInput = document.createElement('input');
    this.toDoSpan = document.createElement('span');
    this.itemObject = {
        value: this.toDoValue,
        checked: this.toDoItemCkecked,
        id: index ? index : toDosStorageList[toDosStorageList.length-1] ? toDosStorageList[toDosStorageList.length-1].id+1 : 0,
    };
    this.addToDoItemToStorageList = function(){
        toDosStorageList.splice(this.itemObject.id, 1, this.itemObject);
    }
    this.render = function(){
        this.toDoItem.classList.add('todo-item');
        this.toDoInput.type = 'checkbox';
        this.toDoInput.checked = this.toDoItemCkecked;
        this.toDoSpan.classList.add('todo-item__description');
        this.toDoSpan.innerText = this.toDoValue;
        this.toDoItemBtn.classList.add('todo-item__delete');
        this.toDoItemBtn.innerText = 'Видалити';
        this.toDoItem.append(this.toDoInput);
        this.toDoItem.append(this.toDoSpan);
        this.toDoItem.append(this.toDoItemBtn);
        toDosWrapperRoot.append(this.toDoItem);
        if (this.toDoInput.ckecked) {
            this.toDoItem.classList.add('todo-item--checked')
        };
        this.toDoInput.addEventListener('click', (e)=>{
            if(e.target.checked){
                this.toDoItem.classList.toggle('todo-item--checked');
                this.itemObject.id==0 ? toDosStorageList[this.itemObject.id-1].checked = true : toDosStorageList[0].checked = true;
            }else{
                this.toDoItem.classList.toggle('todo-item--checked');
                toDosStorageList[this.itemObject.id-1].checked = false;
            };
        });
        this.toDoItemBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            // toDosStorageList.splice(toDosStorageList.findIndex(el=>el.id === this.itemObject.id));
            toDosStorageList.splice(this.itemObject.id, 1);
            this.toDoItem.remove();
        });
    };

};

addBtn.addEventListener('click', function(event){
    event.preventDefault();

    let item = new ToDoItem(toDoValueForm.value, );
    item.render();
    item.addToDoItemToStorageList();
    
console.log(toDosStorageList);
});

window.addEventListener('beforeunload', function (e) {
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(toDosStorageList));
});