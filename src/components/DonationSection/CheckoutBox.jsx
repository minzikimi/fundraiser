import React, { useState } from 'react';
import styles from './CheckoutBox.module.css';
import Button from '../Button/Button';

const CheckoutBox = () => {
  const [amount, setAmount] = useState('');
  const [stage, setStage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirm = () => {
    if (amount) {
      setStage(2);
    } else {
      console.log('yo! select')
    }
  };

  const handlePaymentConfirm = () => {
    if (paymentMethod) {
     
    } else {
      
    }
  };


  return (
    <div className={styles.checkoutBox}>
      {stage === 1 && (
        <>
          <h2 className={styles.heading}>Choose your donation amount</h2>
          <div className={styles.radioGroup}>
            <div className={styles.radioItem}>
              <label>
                <input
                  type="radio"
                  value="100kr"
                  checked={amount === '100kr'}
                  onChange={(e) => setAmount(e.target.value)}
                />
                100kr
              </label>
            </div>
            <div className={styles.radioItem}>
              <label>
                <input
                  type="radio"
                  value="200kr"
                  checked={amount === '200kr'}
                  onChange={(e) => setAmount(e.target.value)}
                />
                200kr
              </label>
            </div>
            <div className={styles.radioItem}>
              <label>
                <input
                  type="radio"
                  value="500kr"
                  checked={amount === '500kr'}
                  onChange={(e) => setAmount(e.target.value)}
                />
                500kr
              </label>
            </div>
            <div className={styles.radioItem}>
              <label className={styles.optionalAmount}>
                <input
                  type="radio"
                  value=""
                  checked={
                    amount !== '100kr' &&
                    amount !== '200kr' &&
                    amount !== '500kr'
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
          </div>
          <Button onClick={handleConfirm}>CONFIRM</Button>

        </>
      )}
      {stage === 2 && (
        <>
          <h2 className={styles.heading}>Choose payment method</h2>
          <div className={styles.radioGroup}>
            <div className={styles.radioItem}>
              <label>
                <input
                  type="radio"
                  value="Swish"
                  checked={paymentMethod === 'Swish'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Swish
              </label>
            </div>
            <div className={styles.radioItem}>
              <label>
                <input
                  type="radio"
                  value="Bank Account"
                  checked={paymentMethod === 'Bank Account'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Bank Account
              </label>
            </div>
          </div>
          <Button onClick={handlePaymentConfirm}>CHECK OUT</Button>
          <Button onClick={() => setStage(1)}>BACK</Button>


        </>
      )}
    </div>
  );
};

export default CheckoutBox;
