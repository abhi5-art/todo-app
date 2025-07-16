const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo.js');

router.get("/",todo.homeControllers);

router.get("/add-todo",todo.addTodoFormController);

router.get("/edit-todo",todo.updateTodoFormController);

router.get("/delete-todo",todo.deleteTodoPageController);

router.post("/add-todo" ,todo.addTodoController);

router.post("/edit-todo/:id",todo.updateTodoController);

router.get("/delete-todo-final/:id",todo.deleteTodoFinalController);


module.exports = router;