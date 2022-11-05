import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import registercss from "../../StyleCss/login.module.css";
const Registration = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();
  const [mobileNo, setmobileNo] = useState();
  const navigate = useNavigate();
  const submitHandler = async () => {
    let local = JSON.parse(localStorage.getItem("token"));
    if (!local) {
      let user = {
        username,
        mobileNo,
        email,
        password,
      };
      const token = await axios.post("http://localhost:4500/api/signup", user);
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
    <div className={registercss.container}>
      <div className={registercss.inputsec}>
        <div>
          <h3>Registration</h3>
        </div>
        <div>
          <span>username</span>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
          <span>mobileNo</span>
          <input
            type="number"
            placeholder="mobileNo"
            onChange={(e) => setmobileNo(e.target.value)}
          />
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
          <button onClick={submitHandler}>Register</button>
          <button onClick={()=>navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
