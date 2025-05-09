import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ raised, goal }) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBackground}>
        <div className={styles.progressFill}></div>
      </div>
      <div className={styles.progressAmounts}>
        <div className={styles.progressRaised}>Raised: {raised} kr</div>
        <div className={styles.progressGoal}>Goal: {goal} kr</div>
      </div>
    </div>
  );
};

export default ProgressBar;
