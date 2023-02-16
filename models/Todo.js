//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const toDoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required and must be a string']
    }, 
    description : {
        type : String,
        required : [true, 'Description is required and must be a string']
    },

    completed : {
        type : Boolean,
        required : true,
        default : false
    },
    id: {
        type : String,
        default : uuidv4()
    },
    dateCreated : {
        type : Date,
        default : Date.now(),
        required : true
    },
    dateCompleted : Date,
    status : {
        type : String,
        default : 'incomplete',
        required : true,
        enum : ['incomplete', 'complete', 'deferred']
    }

})

const Todo = mongoose.model("To-do-list", toDoSchema)

module.exports = Todo


// name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']