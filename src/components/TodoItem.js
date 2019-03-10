import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={(event) => props.handleChange(props.todo.id)} checked={props.todo.completed} />
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;