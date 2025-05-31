
const express = require('express');
const cors = require('cors');

let TODOS = [
    {
        "id": 0,
        "value": "do wome work",
        "checked": true
    },
    {
        "id": 1,
        "value": "do class work",
        "checked": false
    }
];

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('<h1 style="color: dark-green">Express host: 5000</h1>');
});

app.get('/todos', (req, res)=>{
    res.send(TODOS);
});

app.post('/todos', (req, res)=>{
    console.log(req.body);
    const newTodo = {...req.body, id: TODOS.length};

    TODOS.push(newTodo);
    res.send(newTodo)
});

app.put('/todos/:id', (req, res)=>{
    const paramId = +req.params.id; 
    TODOS = TODOS.map(item=>{
        return item.id === paramId ? req.body : item
    });
    res.send(TODOS)
});

app.delete('/todos/:id', (req,res)=>{
    const paramId = +req.params.id; 
    TODOS = TODOS.filter(item=>item.id !== paramId);
    res.send(TODOS)
})

app.listen(5000, ()=>{
    console.log('Express server runing...');
});
