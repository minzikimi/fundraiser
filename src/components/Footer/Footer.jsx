import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/white-logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className={styles.logoTitle}>
        <Link to="/">
          <img
            src={logo}
            alt="Sveriges Museum om Förintelsen logo"
            className={styles.logo}
          />
        </Link>
      </div>

      <nav className={styles.navSection} aria-label="Footer links">
        <ul className={styles.mainLinks}>
          <li>
            <a href="https://museumforintelsen.se/en/about-the-museum/">
              {t("footer.about")}
            </a>
          </li>
          <li>
            <a href="https://museumforintelsen.se/en/about-the-museum/contact-us/">
              {t("footer.contact")}
            </a>
          </li>
          <li>
            <a href="https://museumforintelsen.se/en/about-the-museum/press-and-media/">
              {t("footer.press")}
            </a>
          </li>
        </ul>
        <ul className={styles.subLinks}>
          <li>
            <a href="https://museumforintelsen.se/en/visit-us/">
              {t("footer.visit")}
            </a>
          </li>
          <li>
            <a href="https://museumforintelsen.se/en/about-the-museum/research-and-development/">
              {t("footer.research")}
            </a>
          </li>
        </ul>
      </nav>

      <address className={styles.contact}>
        <span>{t("footer.contactLabel")}:</span>{" "}
        <a href={`mailto:${t("footer.email")}`}>{t("footer.email")}</a>
      </address>

      <div className={styles.social} aria-label="Social media links">
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
    </footer>
  );
};

export default Footer;
