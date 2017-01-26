var mysql = require('mysql');   
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


module.exports = function(app) {
    var server = app.drivers.express.server;
    
    server.get('/', function(req,res){
        res.sendFile(path.resolve('views/html/election.html'));
    });
    
    server.get('/page', function(req,res){
        res.send('Autre page');
    });
    
    server.use(bodyParser.json()); // to support JSON-encoded bodies
    server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));
    
server.use('/css', express.static(__dirname + '/../views/css'));
server.use('/js', express.static(__dirname + '/../views/js'));
 
    

// Create a votant

server.post('/api/votant', function(req, res){
    
    var votant = new app.models.votant(app, {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    });
    
    votant.register(function(rows){
        res.send(rows);
    });
});

// Get votant infos

server.get('/api/votant', function(req, res){
    
    var candidate = new app.models.votant(app, {
        id : req.query.id
    });
    
    candidate.get(function(rows){
        res.send(rows);
    })
})


// Create a candidat

server.post('/api/candidat', function(req, res){
    
    var candidate = new app.models.president(app, {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    });
    
    candidate.register(function(rows){
        res.send(rows);
    });
});

// Get candidat infos

server.get('/api/candidat', function(req, res){
    
    var candidate = new app.models.president(app, {
        id : req.query.id
    });
    
    candidate.get(function(rows){
        res.send(rows);
    })
})



//Post Vote

server.post('/api/vote', function(req, res){
    
    var vote = new app.models.vote(app, {
        
        id : req.body.id,
        candidate : req.body.candidate,
        voters : req.body.voters
    });
    
    vote.register(function(rows){
        res.send(rows);
    });
});




server.get('/api/vote', function (req, res) {
        var vote = new app.models.vote(app, {
            id: req.query.id
        });
        vote.get(function(rows){
            res.send(rows);
        }) 
    });
    
    }       