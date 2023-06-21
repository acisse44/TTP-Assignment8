import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Credit() {
const [yourCredit , setYourCredit] = useState("");
const [creditAmount, setCreditAmount] = useState("");
const [currentDate, setCurrentDate] = useState("");


useEffect(() => {
    async function loadAccountBalance() {
        try {
            const response = await fetch(
                `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
            );
            const data = await response.json();
            setYourCredit(data);
        } catch (error) {
            console.log(error);
        }
    }
    loadAccountBalance();
}, []);

function handleCredit(event) {
    setCreditAmount(event.target.value);
}
function handleGivenCredit(event) {
    setYourCredit(prevCredit => prevCredit + Number(creditAmount));
    setCreditAmount("");
}
useEffect(() => {
    handleCurrentDate();
  }, []);

  function handleCurrentDate() {
    let today = new Date().toLocaleDateString();
    setCurrentDate(today);
    console.log(today);
  }


return (
    <div>
        <h1>Credit</h1>


        <h2>Current Balance</h2>
        {/* <button onClick={handleDebit}>Display Account Balance</button> */}
         <AccountBalance AccountBalance = {yourCredit}></AccountBalance>

         <h3>Credit Amount</h3>

         <input
            id= "addCredit"
            type = "text"
            value = {creditAmount}
            onChange= {handleCredit}
            placeholder="Enter Amount"
         />
        <button onClick= {handleGivenCredit} id="searchC" >
            Submit
        </button>

        <h4> Date: {currentDate} </h4>


        <h5>Description</h5>
            <input
                id= "describeCredit"
                type = "text"
                placeholder="Enter Description"
            />

        <button onClick= {handleGivenCredit} id="searchC" >
            Submit
        </button>

        <nav>
            <ul>
                <li>
                    <Link to="/userProfile">Back to User Profile</Link>
                </li>
                <li>
                    <Link to="/">Back to Home</Link>
                </li>
            </ul>
        </nav>
    </div>

    );
}

export default Credit;