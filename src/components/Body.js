import React from "react";
import Browse from "./Browse";
import Login from "./Login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
