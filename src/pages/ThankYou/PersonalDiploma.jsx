import React, { useState } from 'react';
import styles from './PersonalDiploma.module.css';
import logo from "../../assets/images/logo-temporary.png";

const PersonalDiploma = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('English');

  return (
    <div className={styles.container}>
        <a href="https://museumforintelsen.se/" aria-label="Go to homepage">
                <img
                  src={logo}
                  alt="Sveriges Museum om Förintelsen logo"
                  className={styles.logo}
                />
              </a>
      <h2>Receive Your Personalized Donation Certificate</h2>
      <div className={styles.nameForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
       </div>
      <div className={styles.language}>
        <p>Choose language</p>
        <label>
          <input
            type="radio"
            value="Svenska"
            checked={language === 'Svenska'}
            onChange={() => setLanguage('Svenska')}
          />
          Svenska
        </label>
        <label>
          <input
            type="radio"
            value="English"
            checked={language === 'English'}
            onChange={() => setLanguage('English')}
          />
          English
        </label>
      </div>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        Yes, I’d like to receive updates and stories from the Swedish Holocaust Museum. (SAMPLE TEXT)
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        I consent to my name being printed on the digital donor wall (optional). SAMPLE TEXT
      </label>

      <button className={styles.button}>Download Your Certificate</button>
    </div>
  );
};

export default PersonalDiploma;
