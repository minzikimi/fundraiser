import React from 'react'
import styles from './CheckoutModal.module.css';


const CheckoutModal = ({ children, onClose }) => {
    return (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>×</button>
            {children}
          </div>
        </div>
      );
      
    }
export default CheckoutModal
