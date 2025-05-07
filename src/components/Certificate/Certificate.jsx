import React, { useState } from 'react';
import styles from './Certificate.module.css';

export default function Certificate() {
  const [name, setName] = useState('');
  const date = new Date().toLocaleDateString('sv-SE'); 

  const displayName = name || 'Anonym';

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <label htmlFor="donorName">Put your name:</label>
        <input
          id="donorName"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          className={styles.input}
        />
      </div>
      <div className={styles.diploma}>
        <p className={styles.logo}>Logo här</p>
        <h1>Certificate of Donation</h1>
        <p>For your generous donation of</p>
        <h2>{displayName}</h2>
        <p>
        Thank you for supporting our mission to preserve history and culture.<span className={styles.museum}>Swedish Museum of Holocaust</span>
        </p>
        <p className={styles.date}>{date}</p>
        <p>Thank you from Swedish Museum of Holocaust.</p>
      </div>
    </div>
  );
}
