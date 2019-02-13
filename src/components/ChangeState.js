import React from "react";

class ChangeState extends React.Component {

    constructor() {
        super()
        this.state = {
            count:0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.clickHandler}>Change!</button>
            </div>
        )
    }
}
export default ChangeState;