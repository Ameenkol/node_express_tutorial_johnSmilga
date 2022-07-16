const express = require('express')
const router = express.Router();

const { getAllTasks, createTasks, updateTask, getTask, deleteTask } = require('../controllers/tasks.controller');

router.route('/').get(getAllTasks).post(createTasks);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router