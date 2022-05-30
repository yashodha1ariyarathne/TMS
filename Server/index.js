var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var authenticateControllerlogin=require('./login/login_route.js');
var authenticateControllermanage=require('./login/admin_login');
var adminControlleradd=require('./administation/add_teacher');
var adminControllerremove=require('./administation/remove_teacher');
var adminControllerview=require('./administation/view_teacher');
var attendanceController=require('./attendance/attendance_view');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/authenticatelogin',authenticateControllerlogin.authenticatelogin);
app.post('/api/authenticatemanage',authenticateControllermanage.authenticatemanage);
app.post('/api/addteacher',adminControlleradd.addteacher);
app.post('/api/removeteacher',adminControllerremove.removeteacher);
app.post('/api/viewteacher',adminControllerview.viewteacher);
app.post('/api/viewattendance',attendanceController.viewattendance);


app.listen(8012);

