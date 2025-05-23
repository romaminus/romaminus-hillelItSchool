'use strict';

$(function() {
    const $toDoValueForm = $('.js--form__input');
    const $toDosWrapperRoot = $('.js--todos-wrapper');
    let toDosStorageList = JSON.parse(localStorage.getItem('list')) || [];

    function saveToLocalStorage() {
        localStorage.setItem('list', JSON.stringify(toDosStorageList));
    }

    function renderToDoItem(item) {
        const $li = $('<li/>')
            .addClass('list-group-item todo-item d-flex align-items-center mb-2')
            .attr('data-id', item.id); 

        const $checkbox = $('<input/>')
            .attr({
                type: 'checkbox',
                checked: item.checked
            })
            .addClass('form-check-input me-2');

        const $span = $('<span/>')
            .addClass('todo-item__description flex-grow-1')
            .text(item.value);

        const $deleteBtn = $('<button/>')
            .addClass('btn btn-danger btn-sm todo-item__delete')
            .text('Видалити');

        if (item.checked) {
            $li.addClass('todo-item--checked');
        }

        $li.append($checkbox, $span, $deleteBtn);
        $toDosWrapperRoot.append($li);
    }

    toDosStorageList.forEach(item => {
        renderToDoItem(item);
    });
    $('.js--form').on('submit', function(e) {
        e.preventDefault(); 

        const toDoValue = $toDoValueForm.val().trim();

        if (toDoValue === '') {
            alert('Будь ласка, введіть завдання.');
            return;
        }

        const newId = toDosStorageList.length > 0 ? Math.max(...toDosStorageList.map(item => item.id)) + 1 : 0;
        const newItem = {
            id: newId,
            value: toDoValue,
            checked: false
        };

        toDosStorageList.push(newItem);
        saveToLocalStorage();
        renderToDoItem(newItem);

        $toDoValueForm.val(''); 
    });
    $toDosWrapperRoot.on('change', 'input[type="checkbox"]', function() {
        const $li = $(this).closest('.todo-item');
        const itemId = parseInt($li.data('id')); 
        const itemIndex = toDosStorageList.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            toDosStorageList[itemIndex].checked = this.checked;
            saveToLocalStorage();
        }
        $li.toggleClass('todo-item--checked', this.checked);
    });

    $toDosWrapperRoot.on('click', '.todo-item__delete', function() {
        const $li = $(this).closest('.todo-item');
        const itemId = parseInt($li.data('id'));
        toDosStorageList = toDosStorageList.filter(item => item.id !== itemId);
        saveToLocalStorage();
        $li.remove();
    });

    $toDosWrapperRoot.on('click', '.todo-item__description', function() {
        const taskText = $(this).text();
        $('#taskModalLabel').text('Ваше завдання'); 
        $('#taskModalBody').text(taskText);
        $('#taskModal').modal('show');
    });
});