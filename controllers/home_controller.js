//home controller
const Task = require('../models/task'); 
module.exports.home = function(req, res){ 
    
    Task.find({},function(err, tasks){ //finding fields from database
        if (err){
            console.log('Error in fetching tasks from db');
            return;
        }
        return res.render('home', {
            title: 'Task To Do',
            task_list: tasks 
        });

    });
};