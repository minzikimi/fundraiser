import React from 'react';
import styles from './howItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.howItWorksContainer}>
      <div className={styles.content}>
        <h2 className={styles.heading}>How It Works</h2>
        <p className={styles.description}>
          Giving Should Be Easy — We are proud to be part of Sweden’s national museum network, ensuring full transparency, accountability, and long-term impact. While we don’t use credit card checkouts yet, supporting us is still simple and secure through direct bank transfers or Swish.
        </p>

        <hr className={styles.divider} />

        {/* Step 1 */}
        <div className={styles.step}>
          <h3>1. Choose Your Donation Method</h3>
          <p>You can donate in either of these two ways:</p>
          <ul className={styles.bulletList}>
            <li>Bank Transfer</li>
            <li>Swish (Sweden only)</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className={styles.step}>
          <h3>2. Confirm Your Donation</h3>
          <p>
            Once you’ve sent your donation, you can optionally email us to get a confirmation or receipt:
          </p>
          <p className={styles.emailLine}>✉ info@museumforintelsen.se</p>
          <p>
            Include your name, donation amount, and date if you’d like a receipt or acknowledgment. (SAMPLE TEXT)
          </p>
        </div>

        {/* Step 3 */}
        <div className={styles.step}>
          <h3>3. See Your Impact</h3>
          <p>Your donation helps us fund real, ongoing projects. We share regular updates via:</p>
          <ul className={styles.bulletList}>
            <li>Our newsletter signup</li>
            <li>Instagram</li>
            <li>Website blog:</li>
          </ul>
          <p className={styles.linkLine}>
            https://museumforintelsen.se/om-museet/permanent-museum/
          </p>
        </div>

        <hr className={styles.divider} />

        {/* Contact */}
        <p className={styles.footerNote}>
          <strong>Still Have Questions?</strong><br />
          We’re here to help! Contact <a href="mailto:info@museumforintelsen.se">info@museumforintelsen.se</a> or visit our Contact Page.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
