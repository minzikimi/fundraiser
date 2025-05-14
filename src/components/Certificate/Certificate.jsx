import styles from "./Certificate.module.css"; 
import logo from "../../assets/images/logo-temporary.png";
import { useTranslation } from "react-i18next";

const Certificate = ({
  donorName = "Donor Name",
  museumName = "Holocaust Museum",
  date = new Date().toLocaleDateString('sv-SE'),
  }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.certificate}>
      <div className={styles["certificate-header"]}>
        <img
          src={logo}
          alt={t("certificate.logoAlt")}
          className={styles.logo}
        />
        <h1 className={styles["certificate-title"]}>{t("certificate.title")}</h1>
      </div>
      <div className={styles["certificate-body"]}>
        <p className={styles.presented}>{t("certificate.presented")}</p>
        <h2 className={styles["donor-name"]}>{donorName}</h2>
        <p>
          {t("certificate.recognition", { museumName })}<br /><br />
          {t("certificate.support")}
        </p>
      </div>
      <div className={styles["certificate-footer"]}>
        <div className={styles.signature}></div>
        <div className={styles.date}>{t("certificate.date")}: {date}</div>
      </div>
    </div>
  );
};

export default Certificate;
