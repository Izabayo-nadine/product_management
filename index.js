 require('dotenv').config();
 const express=require("express"); 
 const dbconnection=require("./models/mongo");
 const bodyparser=require("body-parser");
 const app=express();
// Define debug functions for different parts of the application
 
const controllers=require("./controllers/user.js");

 const options=require("./swagger.js");
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended: true}));
 app.use(express.urlencoded({extended: true}));
 const swaggerUi = require('swagger-ui-express');
 const swaggerJSDoc=require("swagger-jsdoc");

 const specs=swaggerJSDoc(options);
 
 app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
 app.use("/user",controllers);
 
 
 const port=5000;
 app.listen(port,()=>{
    console.log(`Server connected on port ${port}`);
 })