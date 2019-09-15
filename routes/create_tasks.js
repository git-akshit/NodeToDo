//Router for creating tasks
const express = require('express');
const router = express.Router();

const createTask = require('../controllers/create_tasks_controller');

router.post('/create-task', createTask.createT);

module.exports = router;