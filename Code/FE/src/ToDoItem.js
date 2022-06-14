import React from "react"
import "./todoitem.css"
const TodoItem = (props) => {
    console.log(props)
    return (
        <div className="todo-item">
            <h1 class="test">{props.phone}</h1>
            <h1 class="test1">{props.name}</h1>
            <h1 class="test2">{props.mail}</h1>
            <h1 class="test3">{props.numoftable}</h1>       
        </div>
    )
}

export default TodoItem;