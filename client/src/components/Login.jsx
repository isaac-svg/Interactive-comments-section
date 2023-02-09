import React, { useState } from "react";
import { Link, Navigate, useNavigate, redirect } from "react-router-dom";
import banner from "../assets/images/farshad-rezvanian-Eelegt4hFNc-unsplash.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function login(e) {
    e.preventDefault();
    const user = { email, password };
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const { success } = data;
        console.log(data);
        if (success == true) {
          navigate("/comment/create");
        }
        if (!success) {
          setTimeout(() => {
            setMessage("");
          }, 2000);
          return setMessage(data.message);
        }
      });
  }
  return (
    <section className="auth">
      <form onSubmit={login}>
        <h1>snap</h1>
        <h4 style={{ color: "red" }}>{message}</h4>
        <div className="greeting">
          <h2>Login</h2>
        </div>

        <div className="inputField">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
            title="your email can be  any string not less than four(4) characters"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
            title="your title can be  any string not less than four(4) characters"
          />
          <button className="continue">Continue</button>
        </div>

        <Link to={"/auth/register"}>
          <p>Don't have an acount? Create one</p>{" "}
        </Link>
      </form>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Login;
