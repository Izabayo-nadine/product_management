const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    productname:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    category: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
},
    {
        timestamps: true // Automatically add createdAt and updatedAt fields
    });

const productModel=new mongoose.model("storedb",productSchema);
module.exports=productModel;