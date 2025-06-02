// const http = require('http');
const express = require('express');
// const os = require('node:os');
const cors = require('cors');
const TodosModel = require('./ToDoScheme');
const mongoose = require('mongoose');

const uri = "mongodb+srv://romaminus19:WM1B4wGL35bB7RcI@cluster0.gnlm7om.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


// console.log(os.cpus());
let TODOS = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 10,
    "id": 200,
    "title": "ipsam aperiam voluptates qui",
    "completed": false
  }
];

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('<h1 style="color: green">Express host: 5000</h1>')
});

app.get('/todos', async (req, res)=>{
  try {
    const todos = await TodosModel.find();
    res.send(todos)
  } catch (error) {
    console.error('Error featching todos:', error);
    res.status(500).send('Internal Server Error')
  }
    // res.send(TODOS);
});

app.post('/todos', (req, res)=>{
    console.log(req.body);
    const newTodo = {...req.body, id: TODOS.length};

    TODOS.push(newTodo);
    res.send(newTodo)
});

app.get('/todos/:id', (req, res)=>{
    const paramId = +req.params.id;
    const todo = TODOS.find(item=>item.id === paramId);
    if (todo) {
        res.send(todo);
    }else{
        res.status(404).send('Sorry, we can not find that!')
    }
    
});

app.put('/todos/:id', (req, res)=>{
  const paramId = +req.params.id;

  TODOS = TODOS.map(item=>{
    return item.id === paramId ? req.body : item
  });
  res.send(TODOS)
});

app.delete('./todos/:id', (req,res)=>{
  
})

app.listen(5000, ()=>{
    console.log('Express server...');
});




// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(
//         JSON.stringify({
//             data: 'Hello World!',
//         }));
// });

// http.get('http://localhost:3000/users', (res)=>{
//     console.log('users');
//     const contentType = res.headers['content-type'];
// })

// server.listen('3000');

