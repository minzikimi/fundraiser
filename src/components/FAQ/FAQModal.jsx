import React from "react";
import styles from "./FAQModal.module.css";

const FAQModal = ({ question, answer, onClose }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQModal;
