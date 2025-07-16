const Todo = require('../models/Todo.js');
const moment = require('moment');//this third-party module used to format date and time in proper way,we can explore about moment in detail on momentjs.com

const homeControllers = async (req,res,next)=>{
    try{
         const todos = await Todo.find({}).sort({createdAt:-1});//todos will be array of all objects that is saved todos
         res.locals.moment=moment;//sharing moment module with all ejs(frontend) pages
         res.render("index",{title : "List-Todo" , todos:todos});
    }catch(error){
         res.status(500).json({message:error.message});
         console.log(error.message);
    }
};

const addTodoFormController = (req,res,next)=>{
    try{
         res.render("AddTodo",{title : "New-Todo"});
    }catch(error){
         res.status(500).json({message:error.message});
         console.log(error.message);
    }
};

const updateTodoFormController = async (req,res,next)=>{
    try{
         const {id} = req.query;
         const todo = await Todo.findById(id);
         res.render("EditTodo",{title : "Update-Todo" , todo});
    }catch(error){
         res.status(500).json({message:error.message});
         console.log(error.message);
    }
};

const deleteTodoPageController =(req,res,next)=>{
    try{
          const {id} = req.query;
         res.render("deleteTodo",{title : "Delete-Todo",id});
    }catch(error){
         res.status(500).json({message:error.message});
         console.log(error.message);
    }
};

const addTodoController = async(req,res,next)=>{
     try{
        const {title,desc} = req.body;
        
        if(!title){
          return res.status(400).json({message:"Title is required"});
        }
        const newTodo=new Todo({title,desc});
        await newTodo.save();

        res.redirect("/");
     }catch(error){
          res.status(500).json({message:error.message});
     }
}

const updateTodoController = async (req,res,next)=> {
     try{
          const {id} = req.params;
          const {title,desc} = req.body;
          const todo=await Todo.findById(id);
          if(!todo){
               return res.status(404).json({message:"Todo Not Found"});
          }
          todo.title=title;
          todo.desc=desc;
          await todo.save();
          res.redirect("/");
     }catch(error){
          res.status(500).json({message:error.message});
     }
};

const deleteTodoFinalController = async(req,res,next)=>{
     try{
           const {id} = req.params;
           await Todo.findByIdAndDelete(id);

           res.redirect("/");
     }catch(error){
          res.status(500).json({message:error.message});
          console.log(error.message);
     }
 };
module.exports = {
    homeControllers,
    addTodoFormController,
    updateTodoFormController,
    deleteTodoPageController,
    addTodoController,
    updateTodoController,
    deleteTodoFinalController
};