import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ raised, goal }) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const percent = Math.min((raised / goal) * 100, 100);

  useEffect(() => {
    setDisplayPercent(percent);
  }, [percent]);

  return (
    <div className={styles.progressContainer}>
      <p
        id="progress-status"
        className={styles.progressParagraph}
        aria-live="polite"
      >
        Togeteher we've raised {percent.toFixed(1)}% of our goal to preserve
        history.
      </p>
      <div
        className={styles.progressBackground}
        role="progressbar"
        aria-labelledby="fundraising-progress-label"
        aria-valuenow={raised}
        aria-valuemin={0}
        aria-valuemax={goal}
        tabIndex={0}
      >
        <div
          className={styles.progressFill}
          style={{ width: `${displayPercent}%` }}
        ></div>
      </div>
      <div className={styles.progressAmounts}>
        <div className={styles.progressRaised}>{raised} kr</div>
        <div className={styles.progressGoal}>{goal} kr</div>
      </div>
    </div>
  );
};

export default ProgressBar;
