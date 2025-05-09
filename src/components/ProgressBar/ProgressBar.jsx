import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ raised, goal }) => {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className={styles.progressContainer}>
      <p className={styles.progressParagraph}>
        Togeteher we've raised {percent.toFixed(1)}% of our goal to preserve
        history.
      </p>
      <div className={styles.progressBackground}>
        <div className={styles.progressFill}></div>
      </div>
      <div className={styles.progressAmounts}>
        <div className={styles.progressRaised}>{raised} kr</div>
        <div className={styles.progressGoal}>{goal} kr</div>
      </div>
    </div>
  );
};

export default ProgressBar;
