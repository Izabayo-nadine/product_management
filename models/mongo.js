const mongoose = require("mongoose");
const url="mongodb://127.0.0.1/node_db";
function connect(){
    try{
        
        mongoose.connect(url);

    }catch(error){
        console.log(error);
    };
    const dbconnection=mongoose.connection;
    dbconnection.once("open",()=>{
        console.log("Db connected");
    });
    dbconnection.on("error",(error)=>{
        console.log(`Err:${error}`);
    })
};
connect();
module.exports=connect;
