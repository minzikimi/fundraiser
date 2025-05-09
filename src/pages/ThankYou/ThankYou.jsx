import React from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/smf-logo.png";
import buttonStyles from "../../components/Button/Button.module.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState } from "react";

const GOAL_AMOUNT = 10000; //sample amount

const ThankYou = () => {
  const navigate = useNavigate();
  const [totalRaised, setTotalRaised] = useState(2000); //inital amount

  // pass to CheckoutBox to update total
  // const handleDonation = (amount) => {
  //   setTotalRaised((prev) => prev + amount);
  // };
  // s;

  return (
    <main className={styles.thankYouContainer}>
      <div className={styles.thankYouWrapper}>
        <header className={styles.headerThankYou}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.titleThankYou}>Thank you!</h1>
        </header>

        <div
          className={styles.progressBarSection}
          aria-label="Donation Progress"
        >
          <ProgressBar current={totalRaised} goal={GOAL_AMOUNT} />
        </div>

        <div className={styles.getDiploma}>
          <h3>
            Your contribution helps preserve the stories of those who can no
            longer speak. Thank you for supporting our mission to ensure history
            is never forgotten.
          </h3>
          <Button
            className={styles.button}
            onClick={() => navigate("/personal-diploma")}
          >
            GET YOUR PERSONAL DIPLOMA
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
