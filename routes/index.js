//this route is root for all other routes,centralize route for every route file
const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);// this router is now accessing the home_controller,this router handles home
router.post('/create-task', require('./create_tasks')); 
router.get('/delete-task/', require('./delete_tasks')); 

module.exports = router;