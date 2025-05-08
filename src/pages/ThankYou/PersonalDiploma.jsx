import React from "react";
import styles from "./PersonalDiploma.module.css";
import React, { useState } from "react";

const PersonalDiploma = () => {
  const [updates, setUpdates] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <main className={styles.personalDiplomaContainer}>
      <header className={styles.headerPersonalDiploma}>
        <div>
          <p>logo goes here</p>
          <h1 className={styles.titlePersonalDiploma}>
            Receive Your Personalized Donation Certificate
          </h1>
        </div>
      </header>

      <section className={styles.nameAndLangSection}>
        <div>
          <form className={styles.nameForm}>
            <div>
              <label htmlFor="name">Name </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="(optional)"
                autoComplete="name"
              ></input>
            </div>
            <div className={styles.languageBtns}>
              Choose language
              <button>Svenska</button>
              <button>English</button>
            </div>
          </form>
        </div>
      </section>
      <form className={styles.preferenceForm}>
        <div>
          <input
            type="checkbox"
            id="updates"
            checked={updates}
            onChange={() => setUpdates(!updates)}
          />
          <label htmlFor="updates">
            Yes, I’d like to receive updates and stories from the Swedish
            Holocaust Museum. (SAMPLE TEXT)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={() => setConsent(!consent)}
          />
          <label htmlFor="consent">
            I consent to my name being printed on the digital donor wall
            (optional) SAMPLE TEXT
          </label>
        </div>
      </form>
    </main>
  );
};

export default PersonalDiploma;
