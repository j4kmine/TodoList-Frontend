import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <p>To Do List</p>
        <Link to="/login"><p className={styles.login__button}>Login</p></Link>
      </nav>
    </>
  );
};

export default Navbar;
