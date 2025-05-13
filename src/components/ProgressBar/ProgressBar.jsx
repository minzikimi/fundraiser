import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";
import { useTranslation } from "react-i18next";


const ProgressBar = ({ raised, goal }) => {
  const [displayPercent, setDisplayPercent] = useState(0);
  const percent = Math.min((raised / goal) * 100, 100);
  const { t } = useTranslation();


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
         {t("progressBar.status", { percent: percent.toFixed(1) })}
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
