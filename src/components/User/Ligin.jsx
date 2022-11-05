import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logincss from "../../StyleCss/login.module.css";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const submitHandler = async () => {
    let local = JSON.parse(localStorage.getItem("token"));
    if (!local) {
      let user = {
        email,
        password,
      };
      const token = await axios.post("http://localhost:4500/api/login", user);
      let res = token.data;
      let key = Object.keys(token.data);
      let tokenobj = {
        token: res.token,
        name: email.split("@")[0],
      };
      if (key[0] === "error") {
        alert(res.error);
      } else {
        alert("login or signup successfull");
        localStorage.setItem("token", JSON.stringify(tokenobj));
        navigate("/");
      }
    } else {
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  return (
    <div className={logincss.container}>
      <div className={logincss.inputsec}>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <span>email</span>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <span>password</span>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={submitHandler}>Login</button>
          <button onClick={()=>navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
