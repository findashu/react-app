import React from "react";
import Conditional from "./components/Conditional"



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading:true
        }
    }
    componentDidMount() {
        
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 2000)
    }
    render() {
        

        return (
            <div className="todo-list">
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional/>}
            </div>
        )
    }

}


export default App