var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var authenticateController=require('./login_route');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/login_route',authenticateController.authenticate);


app.listen(8012);
