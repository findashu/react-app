import React, {Component} from "react";

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            username :'ashu'
        }
    }
    render() {
        return (
            <div>
                <Header username={this.state.username} />
                <Greetings />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <header>
                <h2>Welcome, {this.props.username}</h2>
            </header>
        )
    }
}

class Greetings extends Component {
    render () {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default App