const express = require('express');
const controller = require('./controllers/controller');
const app = express();

//set the template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
controller(app);

//listen to port
app.listen(3000);
console.log("You're listening to port 3000...");