import React from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faqSection}>
      <h2>FAQ</h2>
      <hr />
      <div className={styles.questionsContainer}>
        <button>Q. Why do you need donations?</button>
        <button>Q. How will my donation be used?</button>
        <button>Q. Does a small donation even make a difference?</button>
        <button>
          Q. Will my name be made public? Can I donate anonymously?
        </button>
      </div>
      <div className={styles.faqImageContainer}>
        <img />
      </div>
    </div>
  );
};

export default FAQ;
