import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Debit from "./Debit";
import Credit from "./Credit";

function UserProfile() {
  return (
    <div>
      <h2>User Profile</h2>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile/Debit">Debit</Link>
          </li>
          <li>
            <Link to="/userProfile/Credit">Credit</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/debit" element={<Debit />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </div>
  );
}

export default UserProfile;