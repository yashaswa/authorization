const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require("./config/serverConfig");

const SetupAndStart = async ()=>{
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.listen(PORT,()=>{
        
        console.log(`Server started at port ${3003}`);
        
        
    });





}
SetupAndStart();