var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.express.init();


app.controllers = {};
app.controllers.route = require('./controllers/route')(app);

app.models = {};



