const Todo = require('../models/Todo')
const { all } = require('../routes/todos')
const { v4: uuidv4 } = require("uuid");


async function index(req, res, next) {
    res.json({
        success : true, 
        message : "todos index page"
    })
}

async function getAllTodos(req, res, next) {
    try {
        const allTodos = await Todo.find({})
        res.json({
            success : true,
            todos : allTodos
        })
    }
    catch (e) {
        res.json({
            success : false,
            error : e.toString()
        })
    }
}

async function createOneTodo(req, res, next) {
    try{
        const name = req.body.name
        const description = req.body.description

        const newTodo = new Todo({
            name, 
            description,
            // id : uuidv4()
        })

        const savedTodo = await newTodo.save()

        res.json({
            success : true,
            todo : savedTodo
        })
    }
    catch (e) {
        res.json({
            error : e.toString()
        })
    }
}

async function updateOneTodo(req, res, next) {
    const entryId = req.params.id 

    try {
        const toDoToUpdate = await Todo.findByIdAndUpdate(entryId, {
            completed : req.body.completed,
            status : req.body.completed ? 'complete' : 'incomplete' ,
            dateCompleted : Date.now()
        })
        res.json({
            success : true,
            updatedTodo : toDoToUpdate
        })
    }
    catch (e) {
        res.json({
            success : false, 
            error : e.toString()
        })
    }
}

async function deleteTodo(req, res, next){
    const entryId = req.params.id

    try{
        const toDoToDelete = await Todo.findByIdAndDelete(entryId)

        res.json({
            success : true,
            message : `blog entry id ${entryId} deleted`
        })
    }
    catch (e){
        res.json({
            success : false,
            error : e.toString()
        })
    }
}

async function deleteMultiple(req, res, next){
    const idsToDelete = req.body.ids

    try {

        await Todo.deleteMany({_id : {$in : idsToDelete}})

        res.json({
            success : true,
            message : `blog entries ${idsToDelete} deleted.`
        })
    }
    catch (e){
        res.json({
            success : false,
            error : e.toString()
        })
    }
}

async function createMultiple(req, res, next) {
    const todos = req.body.todos
    try {

        const createdTodos = await Todo.create(todos)

        res.json({
            success : true,
            todos : createdTodos
        })
    }
    catch (e) {
        res.json({
            success : false,
            error : e.toString()
        })
    }
}

module.exports = {
    index,
    getAllTodos,
    createOneTodo, 
    updateOneTodo,
    deleteTodo, 
    deleteMultiple, 
    createMultiple
}