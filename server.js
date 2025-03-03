const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top 
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json()); //creates req.body
app.use(favicon(path.join(__dirname, 'build','favicon.ico'))); // "./build/favicon.ico" dirname references root folder
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/users/login', require('./routes/api/users'));
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/notes', ensureLoggedIn, require('./routes/api/notes'));
app.use('/api/notes/create', ensureLoggedIn, require('./routes/api/notes'));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port: ${port}`)
});