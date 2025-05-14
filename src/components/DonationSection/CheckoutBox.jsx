import React, { useState } from "react";
import styles from "./CheckoutBox.module.css";
import Button from "../Button/Button";
import CheckoutModal from "./CheckoutModal";
import { useNavigate } from "react-router-dom";
import swishSample from "../../assets/images/swishSample.jpeg";
import { useTranslation } from "react-i18next";

const CheckoutBox = () => {
  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleConfirm = () => {
    if (amount) {
      setStage(2);
    } else {
      console.log("yo! select");
    }
  };

  const handlePaymentConfirm = () => {
    if (paymentMethod) {
      setShowModal((prev) => !prev);
    } else {
      alert("Please select the amount!");
    }
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className={styles.checkoutBox}>
        {stage === 1 && (
          <>
            <h2 className={styles.heading}>{t("donation-box.title")}</h2>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    value="100kr"
                    checked={amount === "100kr"}
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
                    checked={amount === "200kr"}
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
                    checked={amount === "500kr"}
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
                      amount !== "100kr" &&
                      amount !== "200kr" &&
                      amount !== "500kr"
                    }
                    onChange={() => setAmount("")}
                  />
                  <input
                    type="text"
                    placeholder={t("donation-box.optional amount")}
                    value={
                      amount !== "100kr" &&
                      amount !== "200kr" &&
                      amount !== "500kr"
                        ? amount
                        : ""
                    }
                    onChange={(e) => setAmount(e.target.value)}
                    className={styles.input}
                  />
                </label>
              </div>
            </div>
            <Button onClick={handleConfirm}>{t("donation-box.confirm")}</Button>
          </>
        )}
        {stage === 2 && (
          <>
            <h2 className={styles.heading}>
              {t("donation-box.choose payment")}
            </h2>
            <div className={styles.radioGroup}>
              <div className={styles.radioItem}>
                <label>
                  <input
                    type="radio"
                    value="Swish"
                    checked={paymentMethod === "Swish"}
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
                    checked={paymentMethod === "Bank Account"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {t("donation-box.bank transfer")}
                </label>
              </div>
            </div>
            <Button onClick={handlePaymentConfirm}>
              {t("donation-box.check out")}
            </Button>
            <Button onClick={() => setStage(1)}>
              {t("donation-box.back")}
            </Button>
          </>
        )}
      </div>
      {showModal && (
        <CheckoutModal onClose={handleCloseModal}>
          {paymentMethod === "Swish" && (
            <div className={styles.modalContent}>
              <h2>{t("donation-modal.swish title")}</h2>
              <p>{t("donation-modal.instruction")}</p>
              <img
                src={swishSample}
                alt="swish sample"
                className={styles.swishSample}
              />
              <div className={styles.buttonWrapper}>
                <Button className={styles.confirmButton} onClick={() => navigate("/thank-you")}>
                  I HAVE DONATED!
                </Button>
              </div>
            </div>
          )}
          {paymentMethod === "Bank Account" && (
            <div className={styles.modalContent}>
              <h2>{t("donation-modal.bank title") }</h2>
              <div className={styles.bankDetails}>
                <p><strong>Bank Name:</strong> Example Bank</p>
                <p><strong>Account Number:</strong> 1234 5678 9012</p>
                <p><strong>IBAN:</strong> SE12 3456 7890 1234 5678 9012</p>
                <p><strong>BIC/SWIFT:</strong> EXAMPSE1</p>
                <p><strong>Reference:</strong> Your Name or Email</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button className={styles.confirmButton} onClick={() => navigate("/thank-you")}>
                  I HAVE DONATED!
                </Button>
              </div>
            </div>
          )}
        </CheckoutModal>

      )}
    </>
  );
};

export default CheckoutBox;
