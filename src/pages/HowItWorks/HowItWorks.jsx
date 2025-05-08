import React from 'react';
import styles from './howItWorks.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const HowItWorks = () => {
  return (
    <>
      <NavBar />
      <div className={styles.howItWorksContainer}>
        <div className={styles.content}>
          <h2 className={styles.heading}>How It Works</h2>
            <p className={styles.intro}>
        Giving Should Be Easy — We are proud to be part of Sweden’s national museum network...
      </p>

    <hr className={styles.divider} />

    <div className={styles.step}>
      <h3 className={styles.stepTitle}>1. Choose Your Donation Method</h3>
      <p className={styles.stepText}>You can donate in either of these two ways:</p>
      <ul>
        <li>Bank Transfer</li>
        <li>Swish (Sweden only)</li>
      </ul>
    </div>

    <div className={styles.step}>
      <h3 className={styles.stepTitle}>2. Confirm Your Donation</h3>
      <p className={styles.stepText}>Once you’ve sent your donation, you can optionally email us to get a confirmation or receipt:</p>
      <a className={styles.email} href="mailto:info@museumforintelsen.se">
        ✉️ info@museumforintelsen.se
      </a>
      <p className={styles.sampleText}>Include your name, donation amount, and date if you’d like a receipt or acknowledgment. (SAMPLE TEXT)</p>
    </div>

    <div className={styles.step}>
      <h3 className={styles.stepTitle}>3. See Your Impact</h3>
      <p className={styles.stepText}>Your donation helps us fund real, ongoing projects. We share regular updates via:</p>
      <ul>
        <li>Our newsletter signup</li>
        <li>Instagram</li>
        <li>
          Website blog:
          <a
            className={styles.link}
            href="https://museumforintelsen.se/om-museet/permanent-museum/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://museumforintelsen.se/om-museet/permanent-museum/
          </a>
        </li>
      </ul>
    </div>

    <hr className={styles.divider} />

    <div className={styles.contact}>
      <p>
         <strong>Still Have Questions?</strong>
        <br />
        We’re here to help! Contact <br /> <a href="mailto:info@museumforintelsen.se">info@museumforintelsen.se</a> or visit our Contact Page.
      </p>
    </div>
    </div>
  </div>
  <Footer />
    </>
  );
};

export default HowItWorks;