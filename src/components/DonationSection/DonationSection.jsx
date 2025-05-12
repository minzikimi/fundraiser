import React from "react";
import styles from "./DonationSection.module.css";
import donationImage from "../../assets/images/image3.jpg";
import CheckoutBox from "./CheckoutBox";

const DonationSection = () => (
  <section className={styles.donationSection}>
    <div className={styles.imageWrapper}>
      <img src={donationImage} alt="Donation" className={styles.fullImage} />
      <div className={styles.checkoutBoxWrapper}>
        <CheckoutBox />
      </div>
    </div>
  </section>
);

export default DonationSection;
