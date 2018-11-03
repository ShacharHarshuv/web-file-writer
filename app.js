const express = require('express');
const controller = require('./controllers/controller');
const app = express();
const port = process.env.PORT || 3000;

//set the template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
controller(app);

//listen to port
app.listen(port, function() {
    console.log("You're listening to port " + port);
});