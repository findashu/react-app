import React from "react";

// https://reactjs.org/docs/forms.html

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName : "",
            lastName : "",
            isFriendly:false,
            gender:"",
            description:"Some default value",
            favColor:"blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(event) {
        let {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]:checked}) : this.setState({[name] : value})
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name"  
                    onChange = {this.handleChange}
                />
                <br />

                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name"  
                    onChange = {this.handleChange}
                />

                <br /> 

                <textarea 
                    name="description"
                    value={this.state.description}
                    onChange = {this.handleChange}
                />

                <br/>
                <label>
                    <input 
                        type="checkbox"
                        name="isFriendly"
                        checked = {this.state.isFriendly}
                        onChange= {this.handleChange}
                    /> Is Friendly?
                </label>

                <br/>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked = {this.state.gender === "male"}
                        onChange= {this.handleChange}
                    /> Male
                </label>

                <br/>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked = {this.state.gender === "female"}
                        onChange= {this.handleChange}
                    /> Female
                </label>

                <br />

                <label>Fav Color : </label>
                <select 
                    value={this.state.favColor}
                    name="favColor"
                    onChange={this.handleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>


                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>You are a {this.state.gender}</h1>
                <h1>Your favourite color {this.state.favColor}</h1>
            </div>
        )
    }
}


export default App