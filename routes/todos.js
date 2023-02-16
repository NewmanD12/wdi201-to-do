const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const Todo = require('../models/Todo')

const todoController = require('../controllers/todoController')

router.get('/', (req, res, next) =>{
    res.json({
        success : true,
        message : "index of todo's page"
    })
})

router.get('/all', todoController.getAllTodos)
router.post('/create-one', todoController.createOneTodo)


module.exports = router 