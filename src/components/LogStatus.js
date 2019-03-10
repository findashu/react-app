import React from "react";

function LoggedInStatus(props) {
    if(props.status){
        return <h1>You are logged In</h1>
    }else {
        return <h1>You are logged Out</h1>
    }

}

export default LoggedInStatus;