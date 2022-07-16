const mongoose = require('mongoose');

const connectionSrting =
    "mongodb+srv://alameen:ameen1993@nodejs-express-projects.vsbbzef.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

mongoose.connect(connectionSrting, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the DB..."))
    .catch((err) => console.log(err));