var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var path = require("path");


var authenticateControllerlogin=require('./login/login_route.js');
// var authenticateControllermanage=require('./login/admin_login');
// var adminControlleradd=require('./administation/add_teacher');
// var adminControllerremove=require('./administation/remove_teacher');
// var adminControllerview=require('./administation/view_teacher');
// var attendanceController=require('./attendance/attendance_view');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./UI')));

app.post('/authenticatelogin');
// app.post('/authenticatemanage',authenticateControllermanage.authenticatemanage);
// app.post('/addteacher',adminControlleradd.addteacher);
// app.post('/removeteacher',adminControllerremove.removeteacher);
// app.post('/viewteacher',adminControllerview.viewteacher);
// app.post('/viewattendance',attendanceController.viewattendance);


app.listen(8012);


