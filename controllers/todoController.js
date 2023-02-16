const Todo = require('../models/Todo')


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
    createOneTodo
}