const mongoose = require("mongoose");

mongoose.connect ("mongodb://localhost:27017/dietilicious",{
}).then(()=>{

    console.log("Connection is successful");
}).catch((err)=>{
    console.log("Connection is unsuccessful");
    console.log(err);
})