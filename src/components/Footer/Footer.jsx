import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/white-logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
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
            {t('footer.about')}
          </a>
          <a href="https://museumforintelsen.se/en/about-the-museum/contact-us/">
            {t('footer.contact')}
          </a>
          <a href="https://museumforintelsen.se/en/about-the-museum/press-and-media/">
            {t('footer.press')}
          </a>
        </div>
        <div className={styles.subLinks}>
          <a href="https://museumforintelsen.se/en/visit-us/">{t('footer.visit')}</a>
          <a href="https://museumforintelsen.se/en/about-the-museum/research-and-development/">
            {t('footer.research')}
          </a>
        </div>
      </nav>

      <address className={styles.contact}>
        {t('footer.contactLabel')}:{" "}
        <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
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
    </footer>
  );
};

export default Footer;