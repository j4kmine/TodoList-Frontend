import React from 'react';
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.login__form}>
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <div className={styles.tos__container}>
        <input type="checkbox" id="tos" name="tos"/>
        <label for="tos">I have read and accept the terms and conditions</label>
        </div>
        <button className={styles.login__button}>Register</button>
      </form>
    </div>
  )
}

export default Register
