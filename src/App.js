import React from "react";
import TodoItem from "./components/TodoItem"
import todosData from "./todosData";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:todosData
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(id) {
        this.setState(prevState => {
           let updatedState =  prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed =  !todo.completed ;
                }
                return todo;
            })
            return {todos:updatedState}
        })
    }



    render() {
        let todosComponent = this.state.todos.map(todo => <TodoItem todo={todo} key={todo.id} handleChange={this.handleOnChange} />)

        return (
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }

}


export default App