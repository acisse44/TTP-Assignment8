import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debit() {
const [yourDebit , setYourDebit] = useState("");
const [debitAmount, setDebitAmount] = useState("");
const [currentDate, setCurrentDate] = useState("");
const [yourDescription, setYourDescription] = useState("");

useEffect(() => {
    async function loadAccountBalance() {
        try {
            const response = await fetch(
                `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
            );
            const data = await response.json();
            setYourDebit(data);
        } catch (error) {
            console.log(error);
        }
    }
    loadAccountBalance();
}, []);

function handleDebit(event) {
    setDebitAmount(event.target.value);
}
function handleGivenDebit(event) {
    setYourDebit(prevDebit => prevDebit - Number(debitAmount));
    setDebitAmount("");
}
function handleGivenDescription(event) {
   return setYourDescription(event.target.value);
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
        <h1 id= "debHeading"> Debits</h1>


        <h2>Current Balance</h2>
        {/* <button onClick={handleDebit}>Display Account Balance</button> */}
         <AccountBalance AccountBalance = {yourDebit}></AccountBalance>

         <h3 id= "debAmountHeading">Debit Amount</h3>

         <input
            id= "subtractDebit"
            type = "text"
            value = {debitAmount}
            onChange= {handleDebit}
            placeholder="Enter Amount"
         />
        <button onClick= {handleGivenDebit} id="searchD" >
            Submit
        </button>

        <h4> Date: {currentDate} </h4>

        <h5> Description</h5>
            <input
                id= "describeDebit"
                type = "text"
                placeholder="Enter Description"
            />

        <button onClick= {handleGivenDescription} id="searchD" >
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


export default Debit;