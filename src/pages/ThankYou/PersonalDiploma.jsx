import React, { useState, useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import styles from "./PersonalDiploma.module.css";
import logo from "../../assets/images/smf-logo.png";
import Certificate from "../../components/Certificate/Certificate";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PersonalDiploma = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("English");
  const certificateRef = useRef();
  const { t, i18n } = useTranslation();

  const handleDownload = async () => {
    if (language === "English" && i18n.language !== "en") {
      await i18n.changeLanguage("en");
    } else if (language === "Svenska" && i18n.language !== "sv") {
      await i18n.changeLanguage("sv");
    }
    await new Promise((resolve) => setTimeout(resolve, 100));

    const element = certificateRef.current;
    const opt = {
      margin: 0.5,
      filename: "donation-certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "landscape" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className={styles.container}>
      <Link to="/" aria-label="Go to homepage">
        <img
          src={logo}
          alt={t("certificate.logoAlt")}
          className={styles.logo}
        />
      </Link>
      <h2>{t("personalDiploma.title")}</h2>
      <div className={styles.nameForm}>
        <label htmlFor="DonorName">{t("personalDiploma.nameLabel")}</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.language}>
        <p>{t("personalDiploma.chooseLanguage")}</p>
        <label>
          <input
            type="radio"
            value="Svenska"
            checked={language === "Svenska"}
            onChange={() => setLanguage("Svenska")}
          />
          Svenska
        </label>
        <label>
          <input
            type="radio"
            value="English"
            checked={language === "English"}
            onChange={() => setLanguage("English")}
          />
          English
        </label>
      </div>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        {t("personalDiploma.updatesConsent")}
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        {t("personalDiploma.donorWallConsent")}
      </label>

      <Button className={styles.button} onClick={handleDownload}>
        {t("personalDiploma.downloadButton")}
      </Button>
      <div
        style={{ display: "inline-block", width: "100%" }}
        ref={certificateRef}
      >
        <Certificate
          donorName={name.trim() !== "" ? name : t("certificate.anonymous")}
        />
      </div>
    </div>
  );
};

export default PersonalDiploma;
