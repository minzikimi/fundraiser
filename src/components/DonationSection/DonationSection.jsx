import React from 'react';
import styles from './donationSection.module.css';
import donationImage from '../../assets/images/image2.jpg';

const DonationSection = () => {
  return (
    <section className={styles.donationSection}>
      <img src={donationImage} alt="Donation" className={styles.fullImage} />
      <div className={styles.overlayBox}>
        <p>I’m on top of the image</p>
      </div>
    </section>
  );
};

export default DonationSection;
