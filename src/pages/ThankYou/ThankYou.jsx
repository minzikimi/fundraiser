import React from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

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
          <p>progress bar goes here</p>
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
