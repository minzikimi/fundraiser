import React, { useState } from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const GOAL_AMOUNT = 10000; //sample amount

const ThankYou = () => {
  const navigate = useNavigate();
  const [totalRaised, setTotalRaised] = useState(2000); //inital amount

  // pass to CheckoutBox to update total
  const handleDonation = (amount) => {
    setTotalRaised((prev) => prev + amount);
  };

  return (
    <main className={styles.thankYouContainer}>
      <div className={styles.goBack}>
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back button"
        >
          GO BACK
        </button>
      </div>

      <header className={styles.headerThankYou}>
        <p>logo goes here</p>
        <h1 className={styles.titleThankYou}>Thank you!</h1>
      </header>
      <section
        className={styles.progressBarSection}
        aria-label="Donation Progress"
      >
        <div>
          <ProgressBar current={totalRaised} goal={GOAL_AMOUNT} />
        </div>
      </section>
      <section className={styles.getDiploma}>
        <h3>
          Your contribution helps preserve the stories of those who can no
          longer speak. Thank you for supporting our mission to ensure history
          is never forgotten.
        </h3>
        <button type="button" id={styles.getDiplomaBtn}>
          GET YOUR PERSONAL DIPLOMA
        </button>
      </section>
    </main>
  );
};

export default ThankYou;
