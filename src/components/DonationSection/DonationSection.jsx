
import React, { useState } from "react";
import styles from "./donationSection.module.css";
import donationImage from "../../assets/images/image3.jpg";
import CheckoutBox from "./CheckoutBox";

const DonationSection = () => {
  const [totalRaised, setTotalRaised] = useState(2000);
  const handleDonation = (amount) => {
    setTotalRaised((prev) => prev + amount);
  };

  return (
    <section className={styles.donationSection}>
      <img src={donationImage} alt="Donation" className={styles.fullImage} />
      <CheckoutBox onDonation={handleDonation} />
    </section>
  );
};


export default DonationSection;
