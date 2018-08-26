var mysql = require('mysql');   
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


module.exports = function(app) {
    var server = app.drivers.express.server;
    
    server.get('/', function(req,res){
        res.sendFile(path.resolve('views/html/portfolio.html'));
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
server.use('/img', express.static(__dirname + '/../views/img'));
 
    



    
}       