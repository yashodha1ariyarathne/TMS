var conn = require('./../database');

var express = require('express');
const http = require('http');
const app = express(); 

var bcrypt = require('bcrypt');
var path = require("path");
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')

const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(serveStatic(path.join(__dirname, 'Server')))
app.use(serveStatic(path.join(__dirname, 'UI')))




app.post('/authenticatelogin',function (request, response) {
	
	let username = request.body.username;
	let password = request.body.password;

	console.log(request.body.username);
		
	conn.query('SELECT * FROM teachrslogin WHERE UserName = ? AND password = ?', [username, password], function (error) {

			if (error){

				response.send('Incorrect Username and/or Password!!');
				console.log('Incorrect Username and/or Password!');
			}

			else {
				console.log('mark your attendance  successfully');
				response.send('mark your attendance  successfully!');
				
	   		}
    });
});
	
	
	server.listen(3000, function(){
		console.log("server is listening on port: 3000");
	});