var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql')
app.drivers.express.init();


app.controllers = {};
app.controllers.route = require('./controllers/route')(app);

app.models = {};
app.models.votant = require('./models/votant');
app.models.president = require('./models/president');
app.models.vote = require('./models/vote');


