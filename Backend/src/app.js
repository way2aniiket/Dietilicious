const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
var bodyParser = require('body-parser')
require("./database/conn")
const port = process.env.PORT || 3000; 

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
 
app.listen(port, (req,res) =>{
    console.log(`Server is running at port no ${port}`);
})
const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phoneNo : Number,
    query : String,
    message : String
});

const contactUs =  mongoose.model("contactUs", contactSchema);

app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.json());

app.get("/Successful",(req,res) => {
    res.sendFile(static_path+"/successful.html")
})
app.get("/Unsuccessful",(req,res) => {
    res.sendFile(static_path+"/unsuccessful.html")
})
app.get("/login",(req,res) => {
    res.sendFile(static_path+"/login.html")
})
app.get("/signup",(req,res) => {
    res.sendFile(static_path+"/signup.html")
})
app.post("/contact",async (req,res) => {
    try{
        console.log(req.body,"req.bodyreq.body");
        const{name,email,phoneNo,query,message}=req.body;
        const contactData = new contactUs({
            name,
            email,
            phoneNo,
            query,
            message
        });
        await contactData.save((error, savedUser)=>{
            if(error) throw error
            res.json(savedUser)
        })
        res.send("/Successful")
            console.log("Successful");
    }
    catch{
        res.redirect("/Unsuccessful")
        console.log("Unsuccessful");
    }
})
