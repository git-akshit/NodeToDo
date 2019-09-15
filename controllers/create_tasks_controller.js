//controller for creating tasks
const Task = require('../models/task'); 

module.exports.createT = function(req, res){
    console.log(req.body);
    console.log(req.body.task);
    console.log(req.body.date);
    console.log(req.body.category)

    Task.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    }, function(err, newTask){ 
        if (err){console.log('error in creating a task');
        return;}
        
        console.log('*************', newTask);
        return res.redirect('back');
    });

};
