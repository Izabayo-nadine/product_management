const jwt=require("jsonwebtoken");
const debug=require("debug")("Output");
function authenticateToken(req, res, next) {
    let  token =req.headers.authorization;
     
     if(!token){
        return res.send("No token found ");
     }else{
        jwt.verify(token.split(' ')[1],process.env.SECRET_KEY,(error,decoded)=>{
            if(error){
                debug(error);
                console.log(error);
                res.send("An error was encountered");
            }else{
                debug(decoded);
                 next();
            }
        })
        
     }
 }
 module.exports=authenticateToken;