//Router for deleting tasks
const express = require('express');
const router = express.Router();

const deleteTask = require('../controllers/delete_task_controller');

router.get('/delete-task/', deleteTask.deleteT);

module.exports = router;