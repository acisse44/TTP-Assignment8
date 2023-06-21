import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//browserrouter 


import Home from "./components/Home"; //importing our home
import Debit from "./components/Debit"; //importing our Debit
import Credit from "./components/Credit" //importing our Credit
import UserProfile from "./components/UserProfile"; //importing our userProfile

function App() { //Our top level component
  return (
    <Router> {/* Handles routing within the app component*/}
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <button>
              <Link to="/">Home</Link> {/*  */}
            </button>
            <button>
              <Link to="/userProfile">UserProfile</Link> {/* links for the application to navigate*/} 
            </button>
          </ul>
        </nav>

        {/* Routes are what's loaded onto the page, nested routes must have wildcard at the end */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 