const express = require('express');

const PORT = 8000;
//initialize the server app
const app= express();

//view engine
app.set("view engine" ,"ejs");

app.listen(PORT,()=>{
     console.log(`Server is Running on port ${PORT} `);
})