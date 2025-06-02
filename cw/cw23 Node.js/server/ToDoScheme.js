const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodosSchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
})

const TodosModel = mongoose.model('Todos', TodosSchema);
module.exports = TodosModel
