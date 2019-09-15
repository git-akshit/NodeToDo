const express = require('express');
const path = require('path'); 
const port = 8000;

const db = require('./config/mongoose');
const app = express(); 

app.set('view engine', 'ejs'); //setting the value of property view_engine as ejs in app
app.set('views', path.join(__dirname, 'views')); 
app.use(express.urlencoded());  

app.use(express.static('assets')); //loads the static files in assets folder

app.use('/',require('./routes')); 

app.listen(port, function(err){ 
    if (err) { console.log('Error in running the server', err);}

    console.log('Yup!My Express Server is running on Port', port);
});


