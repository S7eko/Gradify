import React, { useState } from "react";
import classes from "./content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// Reusable Input Field Component
const InputField = ({ type, id, placeholder, value, onChange }) => (
  <div className={classes.form_group}>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("https://skillbridge.runasp.net/api/Users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Login failed. Please try again.");
        return;
      }

      setSuccess("Login successful. Welcome back!");
      localStorage.setItem("token", result.token);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const content = {
    h3: "Homepage",
    h1: "One Step Closer to Your Dream",
    p: "A free E-Learning service ready to help you become an expert.",
    button: "Sign In",
    span: "Don't have an account?",
    a: "Sign Up",
  };

  return (
    <div className={classes.login}>
      <div className={classes.login_content}>

        <div className={classes.login_body}>
          <section className={classes.login_body_left}>
            <div className={classes.login_body_left_image}>
              <h1>{content.h1}</h1>
              <p>{content.p}</p>
            </div>
          </section>

          <section className={classes.login_body_right}>
            <div className={classes.login_body_right_text}>
              <h1>Login</h1>
              <p>Prepare yourself for a future full of stars.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <InputField
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={classes.form_group}>
                <button type="submit">{content.button}</button>
              </div>

              {error && <p className={classes.error}>{error}</p>}
              {success && <p className={classes.success}>{success}</p>}

              <span>
                {content.span} <a href="/register">{content.a}</a>
              </span>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
