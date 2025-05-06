import React from "react";
import logo from "../../assets/images/logo-temporary.png";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>
            Main
          </Link>
        </li>
        <span className={styles.divider}>|</span>
        <li>
          <Link to="/how-it-works" className={styles.link}>
            How it works
          </Link>
        </li>
        <span className={styles.divider}>|</span>
        <li className={styles.languageToggle}> English</li>
        <span class="material-symbols-outlined">language</span>
      </ul>
    </nav>
  );
};

export default NavBar;
