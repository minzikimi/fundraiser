import React from "react";
import styles from "./FAQModal.module.css";

const FAQModal = ({ question, answer, onClose }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        <div className={styles.headingWrapper}>
          <h3>{question}</h3>
          <hr className={styles.questionUnderline} />
        </div>
        <p>{answer}</p>
        <span
          className={`material-symbols-outlined ${styles.closeButton}`}
          onClick={onClose}
        >
          cancel
        </span>
      </div>
    </div>
  );
};

export default FAQModal;
