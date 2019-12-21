const express= require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", (req,res,next)=>{
    res.sendFile(__dirname + "/signup.html");

});

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});