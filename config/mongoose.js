// require the library
const mongoose = require('mongoose');//requiring mongoose

// connect to the database
mongoose.connect('mongodb://localhost/tasks_list_db'); //mongoose connecting to database, using connect function to connect tasks_list_db

// acquire the connection (to check if it is successful)
const db = mongoose.connection; //when it has connected then that connection gives us access to database, db is used to access the database

// error
db.on('error', console.error.bind(console, 'error connecting to db')); //if there is an error then print it

// up and running then print the message
db.once('open', function(){ //once it is open then 
    console.log('Successfully connected to the database');
});