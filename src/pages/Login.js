import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");

  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Designation"
          value={designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
        <button
          onClick={() => {
            alert("Successfully Logged IN");
            navigate("/home");
          }}
        >
          Login
        </button>
        <div>
          Dont have account?
          <button
            onClick={() => {
              alert("Successfully Registered");
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
