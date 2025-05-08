import React from "react";
import logo from "../../assets/images/smf-logo.png";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("SV");
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };
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
        <li className={styles.languageToggle} onClick={toggleDropdown}>
          {language}
          <span className={styles.languageIcon}>language</span>
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <li onClick={() => selectLanguage("EN")}>EN</li>
              <li onClick={() => selectLanguage("SV")}>SV</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
