import React, { useState } from 'react';
import styles from './CheckoutBox.module.css';
import Button from '../Button/Button';
import CheckoutModal from './CheckoutModal';
import { useNavigate } from 'react-router-dom';
import swishSample from '../../assets/images/swishSample.jpeg'

const CheckoutBox = () => {
  const [amount, setAmount] = useState('');
  const [stage, setStage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleConfirm = () => {
    if (amount) {
      setStage(2);
    } else {
      console.log('yo! select')
    }
  };

  const handlePaymentConfirm = () => {
    if (paymentMethod) {
     setShowModal((prev)=>!prev)
    } else {
      alert('Please select the amount!')
    }
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
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
                    type='radio'
                    value='Swish'
                    checked={paymentMethod === 'Swish'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Swish
                </label>
              </div>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type='radio'
                    value='Bank Account'
                    checked={paymentMethod === 'Bank Account'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Bank Transfer
                </label>
              </div>
            </div>
            <Button onClick={handlePaymentConfirm}>CHECK OUT</Button>
            <Button onClick={() => setStage(1)}>BACK</Button>
          </>
        )}
      </div>
      {showModal && (
        <CheckoutModal onClose={handleCloseModal}>
          {paymentMethod === 'Swish' && (
            <div>
              <h2>Swish Payment</h2>
              <p>Plese scan the QR code to proceed with the payment. Close the window to cancel.</p>
              <img src={swishSample} alt="swish sample" className={styles.swishSample} />
              <button onClick={()=>navigate('/thank-you')}>I HAVE DONATED!</button>
            </div>
            
          )}
          {paymentMethod === 'Bank Account' && (
            <div>
              <h2>Bank Transfer</h2>
              <p>Bank :</p>
              <button onClick={()=>navigate('/thank-you')}>I HAVE DONATED!</button>
            </div>
          )}
        </CheckoutModal>
      )}
    </>
  );
};

export default CheckoutBox;
