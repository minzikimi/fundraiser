import React from "react";
import styles from "./Certificate.module.css"; 
import logo from "../../assets/images/logo-temporary.png";

const Certificate = ({
  donorName = "Donor Name",
  museumName = "Holocaust Museum",
  date = new Date().toLocaleDateString('sv-SE'),
}) => (
  <div className={styles.certificate}>
    <div className={styles["certificate-header"]}>
      <img
        src={logo}
        alt="Sveriges Museum om Förintelsen logo"
        className={styles.logo}
      />
      <h1 className={styles["certificate-title"]}>Certificate of Donation</h1>
    </div>
    <div className={styles["certificate-body"]}>
      <p className={styles.presented}>Presented to</p>
      <h2 className={styles["donor-name"]}>{donorName}</h2>
      <p>
        In recognition and appreciation of your generous donation to the <strong>{museumName}</strong>.<br /><br />
        Your support helps us preserve the memory and lessons of the Holocaust for future generations.
      </p>
    </div>
    <div className={styles["certificate-footer"]}>
      <div className={styles.signature}>
     </div>
      <div className={styles.date}>Date: {date}</div>
    </div>
    <p className={styles.quote}>
      “For the dead and the living, we must bear witness.”<br />
      - Elie Wiesel
    </p>
  </div>
);

export default Certificate;
