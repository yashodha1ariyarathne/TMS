var conn = require('./../database');

var express = require('express');

var bcrypt = require('bcrypt');
var path = require("path");
var bodyParser = require('body-parser');


const app = express(); 


app.use(bodyParser.urlencoded({extended: false}));

var serveStatic = require('serve-static')


app.use(serveStatic(path.join(__dirname, 'Server')))
app.use(serveStatic(path.join(__dirname, 'UI')))


app.post('/authenticatelogin', async(request, response) =>{
	try{
		var username = request.body.username;
		var password = request.body.password;

		if (username && password) {

			await conn.query('SELECT * FROM teacherlogin WHERE username = ? AND password = ?', [username, password], (results)=> {
				
				if (results.length > 0) {

					request.session.loggedin = true;
					request.session.username = username;
					response.redirect('/index');
				} 
				else {

					response.send('Incorrect Username and/or Password!');
				}
				
				response.end();
			});
			
		} else {
			response.send('Please enter Username and Password!');
			response.end();

		}
}
	catch{
		res.send("Internal server error");
	}
});

app.listen(8012);

