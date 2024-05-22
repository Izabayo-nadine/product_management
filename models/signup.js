const mongoose=require("mongoose");
const info=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
    }
});
const infoModel=new mongoose.model("signup",info);
module.exports=infoModel;