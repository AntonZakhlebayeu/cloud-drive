import React, { useState } from "react";
import "./registration.css";
import Input from "../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__header">Registration</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Enter email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter password..."
      />
      <button
        className="registration__btn"
        onClick={() => registration(email, password)}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
