import React from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.thankYouContainer}>
      <nav className={styles.navbarGoBack} aria-label="Go back navigation">
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ← GO BACK
        </button>
      </nav>
      <header className={styles.headerThankYou}>
        <div>
          <p>logo goes here</p>
          <h1 className={styles.titleThankYou}>Thank you!</h1>
        </div>
      </header>
      <section
        className={styles.progressBarSection}
        aria-label="Donation Progress"
      >
        <div>
          <p>progress bar goes here</p>
          <h3>
            Your contribution helps preserve the stories of those who can no
            longer speak. Thank you for supporting our mission to ensure history
            is never forgotten.
          </h3>
          <button type="button" id={styles.getDiplomaBtn}>
            GET YOUR PERSONAL DIPLOMA
          </button>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
