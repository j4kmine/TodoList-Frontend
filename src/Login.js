import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.login__form}>
        <h2>Login</h2>
        <input type="text" placeholder="Username or email" />
        <input type="password" placeholder="Password"/>
        <button className={styles.login__button}>Sign in</button>
        <p>or</p>
        <Link to="/register">
          <button className={styles.register__button}>Create new account</button>
        </Link>
        <p className={styles.forgot__button}>Forgot password?</p>
      </form>
    </div>
  );
};

export default Login;
