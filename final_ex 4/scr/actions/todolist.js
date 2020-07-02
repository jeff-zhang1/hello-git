import {ADD_TODOLIST} from "../constants/todoaction-type.js"
import {EDIT_TODOLIST} from "../constants/todoaction-type.js"

export const addTodoList = todoList => ({
    type : ADD_TODOLIST, payload : todoList
})



export const editTodoList = todoList => ({
    type : EDIT_TODOLIST,
    payload : todoList
})