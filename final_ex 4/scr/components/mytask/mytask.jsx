import React from "react"
import {AddTask} from "../addtask"
import {TodoLists} from "../todolist"

class MyTasks extends React.Component{
    render(){
        return (
            <div class="InputTasksForm">
                <AddTask />
                <TodoLists />
            </div>
        )
    }
}

export { MyTasks }