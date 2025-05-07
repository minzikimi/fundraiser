import React, { useState } from 'react';
import styles from './donationSection.module.css';
import donationImage from '../../assets/images/image1.jpg';
import DonationBox from '../DonationBox/DonationBox';

const DonationSection = () => {


  return (
    <section className={styles.donationSection}>
      <img src={donationImage} alt="Donation" className={styles.fullImage} />
      <DonationBox />
    </section>
  );
};

export default DonationSection;
