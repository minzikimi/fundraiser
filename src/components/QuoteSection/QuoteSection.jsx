import React from "react";
import styles from "./QuoteSection.module.css";

const QuoteSection = () => {
  return (
    <div className={styles.quoteSection}>
      <h2>
        <div>
          <p>Your Support Is a</p>
          <p>Voice Against</p>
          <p>Forgetting</p>
        </div>
      </h2>
      <p className={styles.quoteDiscription}>
        Your donation helps preserve the history of the Holocaust and educate
        future generations. Together, we can ensure that the lessons of the past
        are never forgotten.
      </p>
    </div>
  );
};

export default QuoteSection;
