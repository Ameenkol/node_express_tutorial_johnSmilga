require("./db/connect")
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//###########middleware################//
app.use(express.json())

//###########middleware################//

// app.get('/api/v1/tasks')             -get all tasks
// app.get('/api/v1/tasks/:id')         -get single tasks (bound with id)
// app.post('/api/v1/tasks')            -create tasks
// app.patch('/api/v1/:id')             -edit  or update tasks (based on id)
// app.delete('/api/v1/tasks/:id')      -delete tasks

// routes

app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening to port ${port}...`)
})
