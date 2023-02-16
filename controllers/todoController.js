const Todo = require('../models/Todo')
const { all } = require('../routes/todos')


async function getAllTodos(req, res, next){
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
            description
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

module.exports = {
    getAllTodos,
    createOneTodo
}