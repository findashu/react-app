import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            unreadMessage:["a","a"]
        }
    }

    render() {
        

        return (
            // using and operator for conditional rendering
            <div>
            {
                this.state.unreadMessage.length > 0 &&
                <h1> You have {this.state.unreadMessage.length} unread message</h1>
            }
           </div>
        )
    }

}


export default App