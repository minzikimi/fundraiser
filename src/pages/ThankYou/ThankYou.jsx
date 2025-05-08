import React from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";


const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.mainThankYou}>
      <header className={styles.headerThankYou}>
        <div className={styles.logoPlaceholder}>Logo goes here</div>
        <h1 className={styles.titleThankYou}>Thank you!</h1>
      </header>

      <section
        className={styles.progressBarSection}
        aria-label="Donation Progress"
      >
        <div className={styles.progressBarPlaceholder}>
          Progress bar goes here
        </div>
      </section>

      <section className={styles.getDiploma}>
        <h3>
          Your contribution helps preserve the stories of those who can no
          longer speak. Thank you for supporting our mission to ensure history
          is never forgotten.
        </h3>
        {/* <Button onClick={() => navigate('/personal-diploma')}> */}
        <Button>
          GET YOUR PERSONAL DIPLOMA
        </Button>
      </section>
    </main>
  );
};

export default ThankYou;

