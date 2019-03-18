import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />

                <input
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input
                    name="age"
                    value={props.age}
                    onChange={props.handleChange}
                    placeholder="Age"
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === 'male'}
                        onChange={props.handleChange}
                    />Male
                </label>

                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === 'female'}
                        onChange={props.handleChange}
                    />Female
                </label>


                <br />
                <label>Destination : </label>
                <select
                    name="destination"
                    value={props.destination}
                    onChange={props.handleChange}
                >
                    <option value="">--Please Choose a Destination--</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.dietaryRestrictions.isVegan}
                    /> Vegan?
                </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.dietaryRestrictions.isKosher}
                    /> Kosher?
                </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.dietaryRestrictions.isLactoseFree}
                    /> Lactose Free?
                </label>

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <p>Your dietary restrictions: </p>
            <p>vegan : {props.dietaryRestrictions.isVegan ? "Yes " : "No "}</p>
            <p>kosher : {props.dietaryRestrictions.isKosher ? "Yes " : "No "}</p>
            <p>lactose : {props.dietaryRestrictions.isLactoseFree ? "Yes " : "No "}</p>
        </main>
    )
}

export default FormComponent