
const getAllTasks = (req, res) => {
    res.json(req.body)
};

const createTasks = (req, res) => {
    res.status(201).json(req.body)
};

const getTask = (req, res) => {
    res.json({id:req.params.id})
};

const updateTask = (req, res) => {
    res.status(200).json(req.bodyody)
};

const deleteTask = (req, res) => {
    res.send('delete task')
};


module.exports = { 
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}