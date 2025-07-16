const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');//this is third party module reuired to read url-encoded data coming from client at server 
const connectMongodb = require('./init/mongodb');
const todoRoute = require("./routes/todo.js");
const dotenv = require('dotenv');//this third party module required to read and manage environment variables

//configures environment variable
dotenv.config();

//to read envieonment variable we have to use 
///process.env.variable_name
// console.log(process.env.PORT);


//initialize the server app
const app= express();

//connect mongodb
connectMongodb();

//view engine
app.set("view engine" ,"ejs");
app.use(express.static(path.join(__dirname,"public")));//which folder/directory is static or it should be publicaly available that you have to mannualy mention using static() method , this method expects path string of directory want to make publicaly available
// __dirname property returns current directory , path module provides join method which joins multiple paths and returns path string
app.use(bodyparser.urlencoded({extended:true}));
app.use("/" ,todoRoute);

module.exports = app;