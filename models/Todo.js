const { mongoose } = require("mongoose")

//defining schma for Todo-list items
const todoSchema=mongoose.Schema(
          {title:{type:String , required:true ,unique:true,maxlength:35,minlength:2,trim:true},desc:String},
          {timestamps:true}
);//trim property hides/removes whitespace before and after the content
     
const Todo = mongoose.model("todo",todoSchema);


module.exports = Todo;