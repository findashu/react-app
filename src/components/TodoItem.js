import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={() => console.log('Changed')} checked={props.todo.completed} />
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;