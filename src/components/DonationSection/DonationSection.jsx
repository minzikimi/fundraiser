import React from 'react';
import styles from './donationSection.module.css';
import donationImage from '../../assets/images/image1.jpg';
import CheckoutBox from './CheckoutBox';

const DonationSection = () => (
  <section className={styles.donationSection}>
    <img src={donationImage} alt="Donation" className={styles.fullImage} />
    <CheckoutBox />
  </section>
);

export default DonationSection;
