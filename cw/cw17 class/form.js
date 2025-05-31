'use strict';

function FieldValidator (field){
    this.field = field;
    this.error = [];

    this.validate = function () {
        
    };
    this.showError = function(){

    }
};

function FormValidator(form) {
    this.form = form;
    this.fields = [];

    this.init = function () {
        console.log(this)
    }
    this.validate = function () {
        
    };
    this.handleSubmit = function () {
        
    }
};

const forms = document.querySelectorAll('form');
forms.forEach(form=>{
    const validator = new FormValidator(form);

    validator.init();
});