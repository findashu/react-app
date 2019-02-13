import React from "react";
import TodoItem from "./components/TodoItem"
import todosData from "./todosData";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:todosData
        }
    }
    render() {
        let todosComponent = this.state.todos.map(todo => <TodoItem todo={todo} key={todo.id} />)

        return (
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }

}


export default App