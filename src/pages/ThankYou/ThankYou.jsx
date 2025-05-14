import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/smf-logo.png";
import GoBackArrow from "../../assets/images/GoBackBtnArrow.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const GOAL_AMOUNT = 100000;

const ThankYou = () => {
  const navigate = useNavigate();
  const [totalRaised, setTotalRaised] = useState(40000); // sample raised
  const { t } = useTranslation();

  const handleDonation = (amount) => {
    setTotalRaised((prev) => prev + amount);
  };

  return (
    <main className={styles.thankYouContainer}>
      <nav className={styles.btnSection}>
        <Button className={styles.goBackBtn} onClick={() => navigate("/")}>
          <img
            src={GoBackArrow}
             alt={t("thank-you.goBackAlt")}
            className={styles.goBackArrow}
          ></img>
          {t("thank-you.goBack")}
        </Button>
      </nav>
      <div className={styles.thankYouWrapper}>
        <header className={styles.headerThankYou}>
          <img
            src={logo}
            alt="Logo"
            className={styles.logo}
            onClick={() => navigate("/")}
          />
          <h1 className={styles.titleThankYou}>{t("thank-you.title")}</h1>
        </header>

        <div
          className={styles.progressBarSection}
          aria-label="Donation Progress"
          aria-live="polite"
        >
          <ProgressBar raised={totalRaised} goal={GOAL_AMOUNT} />
        </div>

        <div className={styles.getDiploma}>
          <h3>
            {t("thank-you.message")}
          </h3>
          <Button
            className={styles.button}
            onClick={() => navigate("/personal-diploma")}
            aria-label={t("thank-you.getDiploma")}
          >
            {t("thank-you.getDiploma")}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
