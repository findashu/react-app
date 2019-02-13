import React from "react";
import TodoItem from "./components/TodoItem"
import todosData from "./todosData";



function App () {
    let todosComponent = todosData.map(todo => <TodoItem todo={todo} key={todo.id} />)

    return (
        <div className="todo-list">
            {todosComponent}
        </div>
    )
}

export default App