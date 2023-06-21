import React from "react";
import {useState} from "react";

const AccountBalance= (props) => { // has the props
    console.log("props working " + props.AccountBalance);
    return (
    <div>
        <h1>{"$" + props.AccountBalance}</h1>

    </div>
    )
    
}

export default AccountBalance;