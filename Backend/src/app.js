const express = require("express");
const app = express();
const path = require("path");
require("./database/conn")
const port = process.env.PORT || 3000; 

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.listen(port, (req,res) =>{
    console.log(`Server is running at port no ${port}`);
})
