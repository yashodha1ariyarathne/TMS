var connection = require('./../database');
module.exports.authenticatelogin=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    
    connection.query('SELECT * FROM teachersLogin WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    status:true,
                    message:' mark your attendance successfully'
                })
            }else{
                res.json({
                  status:false,
                  message:"usenme and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"username does not exits"
          });
        }
      }
    });
}

