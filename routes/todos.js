const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const Todo = require('../models/Todo')

const todoController = require('../controllers/todoController')

router.get('/', todoController.index)
router.get('/all-todos', todoController.getAllTodos)
router.post('/create-one', todoController.createOneTodo)
router.put('/update-one/:id', todoController.updateOneTodo)
router.delete('/delete-one/:id', todoController.deleteTodo)
router.delete('/delete-many', todoController.deleteMultiple)


module.exports = router 