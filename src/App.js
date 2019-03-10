import React from "react";
import LogStatus from "./components/LogStatus"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn:true
        }
        this.handleStatus = this.handleStatus.bind(this)
    }

    handleStatus = function () {
        this.setState(prevState => {
            return {
                isLoggedIn :!prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? 'Log out' : 'Log In'
        return (
            
            <div>
                <LogStatus status = {this.state.isLoggedIn} />
                <button onClick={this.handleStatus}>{buttonText}</button>
           </div>
        )
    }

}


export default App