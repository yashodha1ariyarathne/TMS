var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var authenticateControllerlogin=require('/login/login_route');
var authenticateControllermanage=require('./login/adminlogin_route');
var adminControlleradd=require('./administation/add_teacher');
var adminControllerremove=require('./administation/remove_teacher');
var adminControllerview=require('./administation/view_teacher');
var attendanceController=require('./attendance/attendance_view');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/login/login_route',authenticateControllerlogin.authenticatelogin);
app.post('/login/adminlogin_route',authenticateControllermanage.authenticatemanage);
app.post('/administation/add_teacher',adminControlleradd.addteacher);
app.post('/administation/remove_teacher',adminControllerremove.removeteacher);
app.post('/administation/view_teacher',adminControllerview.viewteacher);
app.post('/attendance/attendance_view',attendanceController.viewattendance);


app.listen(8012);

