import React from "react";
import styles from "./FAQ.module.css";
import faqImage from "../../assets/images/faqImage.png";

const FAQ = () => {
  return (
    <div className={styles.faqSection}>
      <h2 className={styles.faqHeading}>FAQ </h2>
      <hr className={styles.underline} />
      <div className={styles.faqContent}>
        <div className={styles.questionsContainer}>
          <button className={styles.button}>
            Q. Why do you need donations?
          </button>
          <button className={styles.button}>
            Q. How will my donation be used?
          </button>
          <button className={styles.button}>
            Q. Does a small donation even make a difference?
          </button>
          <button className={styles.button}>
            Q. Will my name be made public? Can I donate anonymously?
          </button>
        </div>
        <img src={faqImage} alt="FAQ_image" className={styles.faqImage} />
      </div>
    </div>
  );
};

export default FAQ;
