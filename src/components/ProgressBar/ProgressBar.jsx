import React from "react";
import "./ProgressBar.module.css";

const ProgressBar = ({ raised, goal }) => {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressLabel}>
        Raised: {raised} kr / {goal} kr
      </div>
      <div className={styles.progressBackground}>
        <div className={styles.progressFill}></div>
      </div>
      <div className={styles.percent}>{percent.toFixed(1)}%</div>
    </div>
  );
};

export default ProgressBar;
