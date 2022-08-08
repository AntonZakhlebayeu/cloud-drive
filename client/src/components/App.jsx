import React, { useEffect } from "react";
import "./app.css";
import Navbar from "./navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { auth } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import Drive from "./drive/Drive";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth ? (
            <Routes>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/" element={<Drive />} />
              <Route path="/login" element={<Navigate replace to="/" />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
