//controller for deleting tasks
const Task = require('../models/task'); 

module.exports.deleteT = function(req, res){
    // get the id from the url
    let id = req.query.id;

    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });
};
