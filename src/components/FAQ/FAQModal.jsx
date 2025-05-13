import React from "react";
import styles from "./FAQModal.module.css";

const FAQModal = ({ question, answer, onClose }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <article
        className={styles.modalContent}
        onClick={stopPropagation}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading"
        aria-describedby="modal-description"
        tabIndex={-1}
      >
        <div className={styles.headingWrapper}>
          <h3 id="modal-heading">{question}</h3>
          <hr className={styles.questionUnderline} />
        </div>
        <p id="modal-description">{answer}</p>
        <button
          className={`material-symbols-outlined ${styles.closeButton}`}
          onClick={onClose}
          aria-label="Close FAQ modal"
        >
          cancel
        </button>
      </article>
    </div>
  );
};

export default FAQModal;
