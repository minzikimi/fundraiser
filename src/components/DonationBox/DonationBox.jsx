// src/components/DonationBox/DonationBox.jsx
import React, { useState } from 'react';
import styles from './DonationBox.module.css'; // Make sure this path is correct

const DonationBox = () => {
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    if (amount) {
      alert('You selected to donate' + amount);
    } else {
      alert('Please select or enter a donation amount.');
    }
  };

  return (
    <div className={styles.overlayBox}>
      <h2 className={styles.heading}>Choose your donation amount</h2>
      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            value="100kr"
            checked={amount === '100kr'}
            onChange={(e) => setAmount(e.target.value)}
          />
          100kr
        </label>
        <label>
          <input
            type="radio"
            value="200kr"
            checked={amount === '200kr'}
            onChange={(e) => setAmount(e.target.value)}
          />
          200kr
        </label>
        <label>
          <input
            type="radio"
            value="500kr"
            checked={amount === '500kr'}
            onChange={(e) => setAmount(e.target.value)}
          />
          500kr
        </label>
        <label className={styles.optionalAmount}>
          <input
            type="radio"
            value=""
            checked={
              amount !== '100kr' && amount !== '200kr' && amount !== '500kr'
            }
            onChange={() => setAmount('')}
          />
          <input
            type="text"
            placeholder="Optional amount"
            value={
              amount !== '100kr' &&
              amount !== '200kr' &&
              amount !== '500kr'
                ? amount
                : ''
            }
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>
      <button onClick={handleConfirm} className={styles.button}>
        Confirm
      </button>
    </div>
  );
};

export default DonationBox;
