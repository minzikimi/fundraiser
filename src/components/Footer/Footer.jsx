import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo-temporary.png";
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoTitle}>
        <a href="https://museumforintelsen.se/" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Sveriges Museum om Förintelsen logo"
            className={styles.logo}
          />
        </a>
      </div>

      <nav className={styles.navSection} aria-label="Footer navigation">
        <div className={styles.mainLinks}>
          <a href="https://museumforintelsen.se/en/about-the-museum/">
            ABOUT THE MUSEUM
          </a>
          <a href="https://museumforintelsen.se/en/about-the-museum/press-and-media/">
            PRESS AND MEDIA
          </a>
          <a href="https://museumforintelsen.se/en/about-the-museum/contact-us/">
            CONTACT US
          </a>
        </div>
        <div className={styles.subLinks}>
          <a href="https://museumforintelsen.se/en/visit-us/">Visit us</a>
          <a href="https://museumforintelsen.se/en/about-the-museum/research-and-development/">
            Research
          </a>
        </div>
      </nav>

      <address className={styles.contact}>
        Contact:{" "}
        <a href="mailto:info@museumforintelsen.se">info@museumforintelsen.se</a>
      </address>

      <div className={styles.social}>
        <a
          href="https://www.facebook.com/museumforintelsen.se"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/museumforintelsen.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCfPhLyJj19cot4IbF0M3bmw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
