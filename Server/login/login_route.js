var conn = require('./../database');

exports.authenticatelogin = async (req,res,next) =>{

    try{

        var [row] = await conn.execute(
            "SELECT * FROM `teacherslogin` WHERE `username`=?",
            [req.body.username]
          );
        var usernameMatch = await compare(req.body.username, row[0].username);
        if (! usernameMatch) {
            return res.status(422).json({
                message: "Invalid username address",
            });
        }

        var passMatch = await compare(req.body.password, row[0].password);
        if(!passMatch){
            return res.status(422).json({
                message: "Incorrect password",
            });
        }

    }
    catch(err){
        next(err);
    }
}
