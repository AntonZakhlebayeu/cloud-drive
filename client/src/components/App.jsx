import React from "react";
import "./app.css";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Routes>
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
